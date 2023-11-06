import { StockInclude } from "../types/Stock";
import { randRevision } from "./randRevision";
import { randId } from "./randId";
import { randBoolean } from "./randBoolean";
import { randPart } from "./randPart";
import { randBin } from "./randBin";

export function randStock(): StockInclude {
  return {
    ...randRevision(),
    id: randId(),
    quantityNew: Math.floor(Math.random() * 100),
    quantityOld: Math.floor(Math.random() * 100),
    myPrice: randBoolean() ? (Math.random() * 10000) | 0 : undefined,
    PartId: randId(),
    BinId: randId(),
    Part: randPart(),
    Bin: randBin(),
  };
}
