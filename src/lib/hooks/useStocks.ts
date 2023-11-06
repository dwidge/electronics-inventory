import { StockInclude } from "../types/Stock";
import { randStock } from "../random/randStock";
import { DeepPartial } from "../utils/DeepPartial";
import { useState } from "react";
import { deepFilter } from "../utils/deepFilter";

export function useStocks(where: DeepPartial<StockInclude> = {}) {
  const [data] = useState<StockInclude[]>(() =>
    Array.from({ length: 10 }, randStock)
  );
  return {
    data: data.filter((v) => deepFilter(v, where)),
  };
}
