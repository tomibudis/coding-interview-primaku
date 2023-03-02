import { useQuery } from "@tanstack/react-query";
import qs from "qs";

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
interface Params {
  filter?: "ongoing" | "completed";
}
const getItems = async (params: Params) => {
  const filterParams = qs.stringify(
    {
      filter: params?.filter || "ongoing",
    },
    { addQueryPrefix: true }
  );
  const { data } = await axios.get<ItemsResponse[]>("/items" + filterParams);

  return data;
};

export const QUERY_GET_ITEM_KEY = "get-items";
const useGetItems = (params?: Params) => {
  return useQuery([QUERY_GET_ITEM_KEY, params?.filter], () => getItems(params));
};

export default useGetItems;
