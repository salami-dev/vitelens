import { Envs } from './enums';

export const BASE_URL: {
  [env in Envs]: string;
} = {
  [Envs.dev]: 'http://localhost:8000/api/v1',
  [Envs.staging]: 'http://localhost:8000',
  [Envs.prod]: 'http://localhost:8000',
};
