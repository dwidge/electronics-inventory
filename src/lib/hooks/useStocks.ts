import { StockInclude } from "../types/Stock";
import { randStock } from "../random/randStock";

export function useStocks() {
  const data: StockInclude[] = Array.from({ length: 10 }, randStock);
  return { data };
}
