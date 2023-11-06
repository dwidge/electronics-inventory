import z from "zod";
import { Revision } from "./Revision";

export const Bin = z.object({
  ...Revision.shape,
  id: z.string(),
  name: z.string(),
});
export type Bin = z.infer<typeof Bin>;
