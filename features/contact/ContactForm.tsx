"use client"
import { useForm } from "react-hook-form"
import { type ContactValues, createContactSchema } from "./validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import type { ContactAlerts, ContactFormMessages } from "./types"
import { ContactTexts } from "@/i18n/tokens/contact"
import ContactInput from "./components/ContactInput"
import ContactTextarea from "./components/ContactTextarea"
import SubmitButton from "./components/SubmitButton"
import { useAlert } from "@/providers/AlertProvider"

export default function ContactForm() {
  const { success, warning } = useAlert()
  const t = useTranslations()
  const form = t.raw(ContactTexts.inputs) as ContactFormMessages;
  const alerts = t.raw(ContactTexts.alerts) as ContactAlerts;
  const schema = createContactSchema(form);

  const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm<ContactValues>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: ContactValues) => {
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error();
      }

      reset();
      success(alerts.success)
    } catch {
      warning(alerts.warning)
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <ContactInput registration={register("email")} type="email" autoComplete="email" placeholder={form.email.placeholder} error={errors?.email?.message} />
      <ContactInput registration={register("subject")} type="text" autoComplete="off" placeholder={form.subject.placeholder} error={errors?.subject?.message} />
      <ContactTextarea registration={register("message")} autoComplete="off" placeholder={form.message.placeholder} error={errors?.message?.message} />
      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  )
}
