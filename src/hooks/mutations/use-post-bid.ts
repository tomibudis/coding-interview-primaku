import { useMutation } from "@tanstack/react-query";

import axios from "~/utils/axios";

interface PayloadBid {
  price: number;
}
const postBid = async (payload: PayloadBid, itemId: string) => {
  const { data } = await axios.post(`/items/bid/${itemId}`, payload);
  return data;
};

const usePostBid = ({ itemId }: { itemId: string }) => {
  return useMutation((payload: PayloadBid) => postBid(payload, itemId));
};

export default usePostBid;
