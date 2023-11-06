import { Revision } from "../types/Revision";
import { randBoolean } from "./randBoolean";
import { randDate } from "./randDate";
import { randId } from "./randId";

export function randRevision() {
  return Revision.parse({
    id: randId(),
    revId: randId(),
    revUser: randId(),
    revDate: randDate(),
    revType: randBoolean(),
  });
}
