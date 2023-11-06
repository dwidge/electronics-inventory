import React from "react";
import { StockInclude } from "../types/Stock";
import { PartView } from "./PartView";
import { PriceView } from "./PriceView";

export const StockView: React.FC<{
  stock: StockInclude;
}> = ({ stock }) => {
  return (
    <div className="paper pad">
      <h2>Stock</h2>
      <p>
        <strong>Quantity (New):</strong> {stock.quantityNew}
      </p>
      <p>
        <strong>Quantity (Second Hand):</strong> {stock.quantityOld}
      </p>
      <p>
        <strong>Bin Location:</strong> {stock?.Bin.name}
      </p>
      <PartView part={stock.Part} />
      <PriceView stock={stock} />
    </div>
  );
};
