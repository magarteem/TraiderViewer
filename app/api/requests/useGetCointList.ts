import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { ResponseCointsType } from "../types/cointsType";

export function useGetCointList() {
  return useQuery({
    queryKey: [`useGetCointList`],
    queryFn: async () => {
      const response = await axios.get<ResponseCointsType>(
        "https://data-api.binance.vision/api/v3/ticker/price");

      return response.data;
    },
  });
}
