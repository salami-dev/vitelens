import { Method, ResponseType } from 'axios';

export type Header = {
  [key: string]: string;
};

export type RequestConfig = {
  method?: Method;
  url: string;
  headers?: Header;
  payload?: unknown;
  query?: Record<string, unknown>;
  responseType?: ResponseType;
};
