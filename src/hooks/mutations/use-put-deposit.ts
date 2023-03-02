import { useMutation } from "@tanstack/react-query";

import axios from "~/utils/axios";

interface DepositPayload {
  amount: number;
}
const putDeposit = async (payload: DepositPayload) => {
  const { data } = await axios.put<string>("/user/deposit", payload);
  return data;
};

const usePutDeposit = () => {
  return useMutation((payload: DepositPayload) => putDeposit(payload));
};

export default usePutDeposit;
