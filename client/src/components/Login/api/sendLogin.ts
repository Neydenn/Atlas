import {baseApi} from "../../../shared/api/baseApi.ts";

interface LoginProps {
  email: string;
  password: string;
}

export const sendLogin = async ({ email, password }: LoginProps) => {
  try {
    const response = await baseApi.post(':8000/api/login', {
      email,
      password,
    })

    return response.data;
  } catch (error) {
    throw new Error(error, { cause: error })
  }
}