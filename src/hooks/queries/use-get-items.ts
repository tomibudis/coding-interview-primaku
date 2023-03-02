import { useQuery } from "@tanstack/react-query";

import axios from "~/utils/axios";

interface User {
  email: string;
  balance: string;
}
interface Bid {
  price: number;
  approved: boolean;
  user: User;
}
interface ItemsResponse {
  _id: string;
  name: string;
  startedPrice: string;
  currentPrice: string;
  creator: string;
  timeWindow: string;
  bids: Bid[];
  createdAt: string;
  updatedAt: string;
}
const getItems = async () => {
  const { data } = await axios.get<ItemsResponse[]>("/items");

  return data;
};
const useGetItems = () => {
  return useQuery(["get-items"], () => getItems());
};

export default useGetItems;
