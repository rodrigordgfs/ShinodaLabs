import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface ServiceConfig {
  url?: string;
  config?: AxiosRequestConfig;
}

export default class Services {
  private url: string;
  private baseConfig: AxiosRequestConfig;
  private axios: AxiosInstance;

  constructor({ url = "", config = {} }: ServiceConfig) {
    this.url = url;
    this.baseConfig = config;

    this.axios = axios.create(config);
  }

  get<T = any>(
    params: object = {},
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T>> {
    return this.axios.get<T>(this.url, {
      ...config,
      params,
    });
  }

  getByID<T = any>(
    id: string,
    params: object = {},
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T>> {
    return this.axios.get<T>(`${this.url}${id}/`, {
      ...config,
      params,
    });
  }

  post<T = any>(
    data: object = {},
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T>> {
    return this.axios.post<T>(this.url, data, config);
  }

  patch<T = any>(
    id: string,
    data: object = {},
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T>> {
    return this.axios.patch<T>(`${this.url}${id}/`, data, config);
  }

  delete<T = any>(
    id: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T>> {
    return this.axios.delete<T>(`${this.url}${id}/`, config);
  }
}
