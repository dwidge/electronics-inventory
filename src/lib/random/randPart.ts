import { randRevision } from "./randRevision";
import { randId } from "./randId";
import { Part } from "../types/Part";
import { randBoolean } from "./randBoolean";
import { randNumber } from "./randNumber";
import { randItem } from "./randItem";

export function randPart(): Part {
  return {
    ...randRevision(),
    id: randId(),
    name: randItem(["tiny thing", "big thing"]) + " " + randId(1),
    type: randItem(["resistor", "diode", "other"]),
    details: {
      feature: randItem(["mini", "overclockable", "high-temp"]),
      wattage: randNumber(0.1, 100).toFixed(2) + "W",
      voltage: randNumber(0.1, 100).toFixed(2) + "V",
    },
    codes: {
      us: randBoolean(0.8) ? "BC" + randId(4) : undefined,
      eu: randBoolean(0.6) ? "BC" + randId(4) : undefined,
      russia: randBoolean(0.3) ? "BC" + randId(4) : undefined,
    },
  };
}
