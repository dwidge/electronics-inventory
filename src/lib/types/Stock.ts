import z from "zod";
import { Revision } from "./Revision";
import { Part } from "./Part";
import { Bin } from "./Bin";

export const Stock = z.object({
  ...Revision.shape,
  id: z.string(),
  quantityNew: z.number(),
  quantityOld: z.number(),
  myPrice: z.number().optional(),
  PartId: z.string(),
  BinId: z.string(),
});
export type Stock = z.infer<typeof Stock>;

export const StockInclude = z.object({
  ...Stock.shape,
  Part: Part,
  Bin: Bin,
});
export type StockInclude = z.infer<typeof StockInclude>;
