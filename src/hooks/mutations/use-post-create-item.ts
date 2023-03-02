import { useMutation } from "@tanstack/react-query";

import axios from "~/utils/axios";

interface PayloadItem {
  name: string;
  startedPrice: number;
  timeWindow: string;
}
const postCreateItem = async (payload: PayloadItem) => {
  const { data } = await axios.post("/items/add", payload);
  return data;
};

const usePostCreateItem = () => {
  return useMutation((payload: PayloadItem) => postCreateItem(payload));
};

export default usePostCreateItem;
