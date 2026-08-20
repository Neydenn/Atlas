import {baseApi} from "./baseApi.ts";
import {useTokenStore} from "../../app/store/TokenStore.ts";
import type {InternalAxiosRequestConfig} from "axios";

type RetryableRequest = InternalAxiosRequestConfig & {
  _retry?: boolean;
};

baseApi.interceptors.request.use((config) => {
  const token = useTokenStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})

baseApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config as RetryableRequest | undefined;

    if (error.response?.status === 401 && originalRequest &&
      originalRequest.url !== '/auth/refresh' && !originalRequest._retry)
    {
      originalRequest._retry = true;

      try {
        const response = await baseApi.post('/auth/refresh');
        const newAccessToken: string = response.data.token;

        useTokenStore.getState().setToken(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return baseApi(originalRequest);
      } catch (refreshError) {
        useTokenStore.getState().clearToken();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
