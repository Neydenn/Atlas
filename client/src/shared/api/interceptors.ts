import {baseApi} from "./baseApi.ts";
import {useAuthStore} from "../../modules/auth/store/AuthStore.ts";

baseApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})

baseApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retru = true;

      try {
        const response = await baseApi.post('/auth/refresh');
        const newAccessToken: string = response.data.access_token;

        useAuthStore.getState().setToken(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return baseApi(originalRequest);
      } catch (refreshError) {
        useAuthStore.getState().clearToken();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);