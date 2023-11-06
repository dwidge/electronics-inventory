import React, { useState } from "react";
import { useStocks } from "../hooks/useStocks";
import { StockView } from "./StockView";
import { DeepPartial } from "../utils/DeepPartial";
import { StockInclude } from "../types/Stock";
import { StockFilter } from "./StockFilter";

export const StockList: React.FC<{}> = ({}) => {
  const [sample, setSample] = useState<DeepPartial<StockInclude>>({});
  const stocks = useStocks(sample);

  return (
    <div className="columns gap">
      <StockFilter value={[sample, setSample]} />
      <div className="columns gap">
        {stocks.data.map((v) => (
          <StockView key={v.id} stock={v} />
        ))}
      </div>
    </div>
  );
};
