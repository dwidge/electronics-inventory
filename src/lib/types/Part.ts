import z from "zod";
import { Revision } from "./Revision";

export const PartDetails = z
  .object({
    feature: z.string(),
    wattage: z.string(),
    voltage: z.string(),
  })
  .partial();
export type PartDetails = z.infer<typeof PartDetails>;

export const Part = z.object({
  ...Revision.shape,
  id: z.string(),
  name: z.string(),
  type: z.string(),
  details: PartDetails,
  codes: z
    .object({
      us: z.string(),
      japan: z.string(),
      eu: z.string(),
      china: z.string(),
      russia: z.string(),
      other: z.string(),
    })
    .partial(),
});
export type Part = z.infer<typeof Part>;
