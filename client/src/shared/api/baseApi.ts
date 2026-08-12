import * as axios from "axios";
import type {AxiosInstance} from "axios";

export const baseApi: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5001',
  withCredentials: true
})