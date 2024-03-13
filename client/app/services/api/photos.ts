import { Http } from './../http';

export class AuthApi {


  public static async isLoggedIn(): Promise<AuthApiTypes.isLoggedInResponse> {

    const response = await Http.get<AuthApiTypes.isLoggedInResponse>({
      url: '/api/v1/photos'
    });

    return response.data;
  }




}

export declare namespace AuthApiTypes {
  export type photoUResponse =  {
  
  };
}

