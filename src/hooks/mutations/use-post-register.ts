import { useMutation } from "@tanstack/react-query";

import axios from "~/utils/axios";
import { setCookieToken } from "~/utils/cookies";

interface PayloadRegister {
  email: string;
  password: string;
}

interface RegisterResponse {
  token: string;
}
const postRegister = async (payload: PayloadRegister) => {
  const { data } = await axios.post<RegisterResponse>("/auth/signup", payload);
  setCookieToken(data.token);
  return data;
};

const usePostRegister = () => {
  return useMutation((payload: PayloadRegister) => postRegister(payload));
};

export default usePostRegister;
