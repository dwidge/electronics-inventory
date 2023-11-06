import React from "react";
import { useStocks } from "../hooks/useStocks";
import { StockView } from "./StockView";

export const StockList: React.FC<{}> = ({}) => {
  const stocks = useStocks();
  return (
    <div className="columns gap">
      {stocks.data.map((v) => (
        <StockView key={v.id} stock={v} />
      ))}
    </div>
  );
};
