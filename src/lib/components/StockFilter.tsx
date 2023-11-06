import React from "react";
import { DeepPartial } from "../utils/DeepPartial";
import { StockInclude } from "../types/Stock";
import { deepMerge } from "../utils/deepMerge";

export const StockFilter: React.FC<{
  value: [
    sample: DeepPartial<StockInclude>,
    setSample: React.Dispatch<React.SetStateAction<DeepPartial<StockInclude>>>
  ];
}> = ({ value: [sample, setSample] }) => {
  return (
    <div className="grid gap">
      <label>Type</label>
      <input
        value={sample.Part?.type ?? ""}
        onChange={(e) =>
          setSample(
            deepMerge(sample, {
              Part: { type: e.target.value || undefined },
            })
          )
        }
      />
      <label>Name</label>
      <input
        value={sample.Part?.name ?? ""}
        onChange={(e) =>
          setSample(
            deepMerge(sample, {
              Part: { name: e.target.value || undefined },
            })
          )
        }
      />
    </div>
  );
};
