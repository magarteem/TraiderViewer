import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CointsType } from "../types/cointsType";


export function useGetCointItem(nameToken: string) {
  return useQuery({
    queryKey: [`useGetCointItem`, nameToken],
    queryFn: async () => {
      const response = await axios.get<CointsType>(
        "https://data-api.binance.vision/api/v3/ticker/price",
        { params: { symbol: nameToken }, }
      );

      return response.data;
    },
  });
}
//https://data-api.binance.vision/api/v3/ticker/price?symbol=BTCUSDT