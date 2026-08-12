import {baseApi} from "../../../shared/api/baseApi.ts";

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const login = async (data: LoginData): Promise<LoginResponse> => {
  try {
    const response = await baseApi.post(`/auth/login`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};