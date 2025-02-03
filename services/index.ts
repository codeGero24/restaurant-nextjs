import axios, { AxiosRequestConfig } from 'axios';
import { QueryClient, QueryFunction, QueryKey } from '@tanstack/react-query';

import APIs from '@/constants/api';
const instance = axios.create({
  baseURL: APIs.API.main,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

const instance_dummy = axios.create({
  baseURL: APIs.API_DUMMY.main,
  timeout: 10000,
  maxRedirects: 1,
  headers: { 'Content-Type': 'application/json' },
});

export async function request({ config }: { config: AxiosRequestConfig }) {
  return await instance.request(config);
}

export async function request_dummy({ config }: { config: AxiosRequestConfig }) {
  return await instance_dummy.request(config);
}

interface fetchQueryParams {
  queryClient: QueryClient;
  queryKey: QueryKey;
  queryFn: QueryFunction;
}

export const fetchQuery = ({ queryClient, queryKey, queryFn }: fetchQueryParams) => {
  return queryClient.fetchQuery({
    queryKey,
    queryFn,
  });
};

export * from './constants.service';
export * from './users.service';
export * from './reviews.service';
export * from './settings.service';
