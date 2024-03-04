import { Http } from './../http';

export class AuthApi {
  public static async loginWithGoogle(): Promise<AuthApiTypes.loginResponse> {
    const response = await Http.get<AuthApiTypes.loginResponse>({
      url: '/auth/google',
      
    });

    console.log("response in loginWithGoogle: ", response)

    return response.data;
  }

  public static async isLoggedIn(): Promise<AuthApiTypes.isLoggedInResponse> {

    const response = await Http.get<AuthApiTypes.isLoggedInResponse>({
      url: '/auth/isloggedin'
    });

    console.log(response, "response.data in isLoggedIn")

    return response.data;
  }

    public static async logout(): Promise<void> {
        const response = await Http.get<void>({
        url: '/auth/logout'
        });
    
        console.log("response in logout: ", response)
    
        return response.data;
    }


}

export declare namespace AuthApiTypes {
  export type loginResponse =  void;
  export type isLoggedInResponse = {
    isLoggedIn: boolean;
  };
//   export type UploadMultipleFilesResponse = SignedUrlResponse[];
}

