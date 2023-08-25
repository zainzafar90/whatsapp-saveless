import * as z from "zod";
import validator from "validator";

export const formSchema = z.object({
  phone: z.string().refine(validator.isMobilePhone),
});
