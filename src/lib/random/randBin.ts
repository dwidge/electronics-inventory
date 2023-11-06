import { randRevision } from "./randRevision";
import { randId } from "./randId";
import { Bin } from "../types/Bin";
import { randNumber } from "./randNumber";

export function randBin(): Bin {
  return {
    ...randRevision(),
    id: randId(),
    name: [
      "Bin",
      randNumber(1, 10) | 0,
      "Row",
      randNumber(1, 10) | 0,
      "Col",
      randNumber(1, 10) | 0,
    ].join(" "),
  };
}
