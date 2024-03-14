import { Http } from './../http';
import { PhotoUploadForm, PhotoType } from '@/bl/photos';

export class PhotoApi {

  public static async createPhoto(payload: PhotoUploadForm): Promise<PhotoApiTypes.createResponse> {

    const response = await Http.post<PhotoApiTypes.createResponse>({
      url: '/api/v1/photos',
      payload
    })

    console.log("hello everybody")

    return response.data;
  }

  public static async getPhotos(): Promise<PhotoApiTypes.createResponse[]> {

    const response = await Http.get<PhotoApiTypes.getResponse>({
      url: '/api/v1/photos'
    })
    return response.data
  }
}

export declare namespace PhotoApiTypes {
  export type createResponse = PhotoUploadForm;
  export type getResponse = PhotoType[];
}

