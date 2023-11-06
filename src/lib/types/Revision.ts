import z from "zod";

export const Index = z.object({
  id: z.string(),
  createdId: z.string(),
});

export const Revision = z.object({
  id: z.string(),
  revId: z.string(),
  revUser: z.string(),
  revDate: z.coerce.date(),
  revType: z.boolean(),
});
export type Version = z.infer<typeof Revision>;

export const Version2 = z.object({
  id: z.string(),
  createdId: z.string(),
  createdBy: z.string(),
  createdAt: z.coerce.date(),
  createdType: z.boolean(),
});
