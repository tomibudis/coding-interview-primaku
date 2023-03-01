import axios, { AxiosRequestConfig } from "axios";

import { getCookieToken } from "./cookies";

const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

customAxios.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getCookieToken();

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    },
  };
});

export default customAxios;
