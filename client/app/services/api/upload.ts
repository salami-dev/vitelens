import { Http } from './../http';
import axios from 'axios';

export class UploadApi {
  public static async createSignedUrl(data: { key: string, file: File }): Promise<UploadApiTypes.SignedUrlResponse> {
    const response = await Http.post<UploadApiTypes.SignedUrlResponse>({
      url: '/api/v1/s3',
      payload: data
    });

    return response.data;
  }

  public static async uploadFile(file: File, url: string): Promise<void> {
    console.log("file in uploadFile: ", file)
    await axios.put(url, file, {
      headers: {
        'Content-Type': file.type
      }
    });
  }


  public static async uploadMultipleFilesWithSignedUrls(files: File[]): Promise<UploadApiTypes.UploadMultipleFilesResponse> {
    const signedUrls = await Promise.all(files.map((file) => UploadApi.createSignedUrl({ key: file.name, file })));
    await Promise.all(signedUrls.map((signedUrl, index) => UploadApi.uploadFile(files[index], signedUrl.url)));
    return signedUrls;
  }
}

export declare namespace UploadApiTypes {
  export type SignedUrlResponse = {
    preSignedurl: string;
    url: string;
  };

  export type UploadMultipleFilesResponse = SignedUrlResponse[];
}
