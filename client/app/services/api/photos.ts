import { Http } from './../http';
import { PhotoUploadForm, PhotoType } from '@/bl/photos';

export class PhotoApi {

  public static async createPhoto(payload: PhotoUploadForm): Promise<PhotoApiTypes.CreateResponse> {

    const response = await Http.post<PhotoApiTypes.CreateResponse>({
      url: '/api/v1/photos',
      payload
    })
    return response.data;
  }

  public static async getPhotos(): Promise<PhotoApiTypes.PhotoAPIResponse[]> {

    const response = await Http.get<PhotoApiTypes.PhotoAPIResponse[]>({
      url: '/api/v1/photos'
    })
    return response.data
  }

  public static async getPhotoByID(id: string): Promise<PhotoApiTypes.PhotoAPIResponse> {
    const response = await Http.get<PhotoApiTypes.PhotoAPIResponse>({
      url: `/api/v1/photos/${id}`,
      // query: { id },

    })
    return response.data

  }
}

export declare namespace PhotoApiTypes {
  export type CreateResponse = PhotoUploadForm;
  export type PhotoAPIResponse = PhotoType;
}

