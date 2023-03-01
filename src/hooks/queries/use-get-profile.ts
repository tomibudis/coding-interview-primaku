import { UseQueryResult, useQuery } from "@tanstack/react-query";

import axios from "~/utils/axios";

interface ProfileResponse {
  _id: string;
  email: string;
  balance: number;
  createdAt: string;
  updatedAt: string;
}

const getProfile = async () => {
  const { data } = await axios.get<ProfileResponse>("/user/me");
  return data;
};
export const useGetProfile = (): UseQueryResult<ProfileResponse, Error> => {
  return useQuery(["profile"], () => getProfile());
};
