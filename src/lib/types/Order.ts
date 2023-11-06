import z from "zod";
import { Revision } from "./Revision";

export const Order = z.object({
  ...Revision.shape,
  id: z.string(),
  PartId: z.string(),
  BinId: z.string(),
  quantity: z.number(),
  from: z.string(),
  price: z.number().optional(),
});
export type Order = z.infer<typeof Order>;
