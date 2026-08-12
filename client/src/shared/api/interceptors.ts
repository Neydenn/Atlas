import {baseApi} from "./baseApi.ts";
import {useAuthStore} from "../../modules/auth/store/AuthStore.ts";

baseApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})

// baseApi.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response?.status === 401 && !error.config._retry) {
//       error.config._retry = true;
//
//     }
//   }
// )