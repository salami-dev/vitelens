import axios, { AxiosError, AxiosInstance, AxiosResponse, Method } from 'axios';
import { Envs, Headers } from './enums';
import { RequestConfig } from './types';
import { BASE_URL } from './constants';

export default class Http {
  private static axiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL[Envs.dev],
    headers: {
      [Headers.CONTENT_TYPE]: 'application/json'
    },
    withCredentials: true
  });

// auth token setting
//   public static setAuthorization(token: string): void {
//     this.axiosInstance.defaults.headers.common[Headers.AUTHORIZATION] = `Bearer ${token}`;
//   }

//   public static setheaserName(headername: string): void {
//     this.axiosInstance.defaults.headers.common[Headers.WHATEVERNAME] = thenameorvalueorwhatever; :TODO: make sense of this
//   }

  public static onUnauthorized(cb: () => void): void {
    this.axiosInstance.interceptors.response.use(undefined, (error: AxiosError) => {
      if (error.response?.status === 401) {
        return cb();
      }
      return Promise.reject(error);
    });
  }

  public static async request<Response>(requestConfig: RequestConfig & { method: Method }): Promise<AxiosResponse<Response>> {
    return this.axiosInstance.request<Response>({
      method: requestConfig.method,
      url: requestConfig.url,
      params: requestConfig.query,
      headers: requestConfig.headers,
      data: requestConfig.payload,
      responseType: requestConfig.responseType ? requestConfig.responseType : 'json'
    });
  }

  public static async get<Response>(requestConfig: RequestConfig): Promise<AxiosResponse<Response>> {
    return Http.request({
      ...requestConfig,
      method: 'GET'
    });
  }

  public static async post<Response>(requestConfig: RequestConfig): Promise<AxiosResponse<Response>> {
    return Http.request({
      ...requestConfig,
      method: 'POST'
    });
  }

  public static async put<Response>(requestConfig: RequestConfig): Promise<AxiosResponse<Response>> {
    return Http.request({
      ...requestConfig,
      method: 'PUT'
    });
  }

  public static async delete<Response>(requestConfig: RequestConfig): Promise<AxiosResponse<Response>> {
    return Http.request({
      ...requestConfig,
      method: 'DELETE'
    });
  }

  public static async patch<Response>(requestConfig: RequestConfig): Promise<AxiosResponse<Response>> {
    return Http.request({
      ...requestConfig,
      method: 'PATCH'
    });
  }

  public static getBaseUrl(): string | undefined {
    return this.axiosInstance.defaults.baseURL;
  }

}