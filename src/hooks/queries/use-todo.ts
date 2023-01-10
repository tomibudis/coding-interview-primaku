import { UseQueryResult, useQuery } from "@tanstack/react-query";

import axios from "~/utils/axios";

interface ResponseTodo {
  id: string;
  title: string;
  completed: boolean;
}

const useQueryTodo = (): UseQueryResult<ResponseTodo[], Error> => {
  const endpoint = "/todos";
  const baseURL = "https://jsonplaceholder.typicode.com";
  return useQuery(["todos"], async () => {
    const { data } = await axios.get<ResponseTodo[]>(endpoint, { baseURL });
    return data;
  });
};

export { useQueryTodo };
export default useQueryTodo;
export type { ResponseTodo };
