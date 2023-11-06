import React from "react";
import { Stock } from "../types/Stock";
import { toPrice } from "./toPrice";

export const PriceView: React.FC<{
  stock: Stock;
}> = ({ stock }) => {
  const stockVersions = [stock];
  return (
    <div className="">
      <p>
        <strong>Last Price:</strong> {toPrice(stockVersions[0].myPrice ?? 0)}
      </p>
      <p>
        <strong>Price Date:</strong> {stockVersions[0].revDate.toDateString()}
      </p>
      <p>
        <strong>Price Before That:</strong>{" "}
        {toPrice(stockVersions[1]?.myPrice ?? 0)}
      </p>
      <p>
        <strong>Price Date 2:</strong>{" "}
        {stockVersions[1]?.revDate.toDateString()}
      </p>
    </div>
  );
};
