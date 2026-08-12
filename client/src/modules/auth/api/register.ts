import {baseApi} from "../../../shared/api/baseApi.ts";

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export const register = async (data: RegisterData) => {
  try {
    const res = await baseApi.post('/auth/register', data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}