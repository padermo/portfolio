import { z } from "zod";
import type { ContactFormMessages } from "./types";

export const createContactSchema = (form: ContactFormMessages) => z.object({
  email: z.string().min(1, { error: form.email.errors.required }).email({ error: form.email.errors.invalid }),
  subject: z.string().min(1, { error: form.subject.errors.required }),
  message: z.string().min(1, { error: form.message.errors.required })
})

export type ContactValues = z.infer<ReturnType<typeof createContactSchema>>;
