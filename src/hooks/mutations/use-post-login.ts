import { useMutation } from "@tanstack/react-query";

import axios from "~/utils/axios";
import { setCookieToken } from "~/utils/cookies";

interface PayloadLogin {
  email: string;
  password: string;
}
interface LoginResponse {
  token: string;
}
const postLogin = async (payload: PayloadLogin) => {
  const { data } = await axios.post<LoginResponse>("/auth/login", payload);
  setCookieToken(data.token);
  return data;
};

const usePostLogin = () => {
  return useMutation((payload: PayloadLogin) => postLogin(payload));
};

export default usePostLogin;
