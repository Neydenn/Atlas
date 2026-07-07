import * as axios from "axios";

export const baseApi = axios.create({
  baseURL: import.meta.env.apiURL || 'http://localhost:',
})
