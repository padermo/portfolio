"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import { Input, Button, Textarea, Label } from "../UI";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import axios from "axios";

interface FormInputs {
  email: string;
  subject: string;
  message: string;
};

export default function Form() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const t = useTranslations("Form");
  const { handleSubmit, control, reset } = useForm<FormInputs>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const res = await axios.post("/api/send", {
        email: data.email,
        subject: data.subject,
        message: data.message,
      });
      if (res) {
        toast.success(t('server.success'))
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(t('server.bad'))
      }
    } finally {
      reset();
      setIsLoading(false);
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 w-full">
      <div>
        <Label
          htmlFor="email"
          text={t("content.email.text")}
          className="block"
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: t("errors.email.required") },
            pattern: {
              value:
                /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/,
              message: t("errors.email.invalid"),
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <Input
                variant={error ? "error" : "primary"}
                placeholder={t("content.email.placeholder")}
                tabIndex={1}
                inputMode="email"
                autoComplete="email"
                id="email"
                value={field.value}
                onChange={field.onChange}
              />
              {error && (
                <span className="text-error text-xs block">
                  {error.message}
                </span>
              )}
            </>
          )}
        />
      </div>
      <div>
        <Label
          htmlFor="subject"
          text={t("content.subject.text")}
          className="block"
        />
        <Controller
          name="subject"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: t("errors.subject.required") },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <Input
                variant={error ? "error" : "primary"}
                placeholder={t("content.subject.placeholder")}
                tabIndex={2}
                inputMode="text"
                id="subject"
                value={field.value}
                onChange={field.onChange}
              />
              {error && (
                <span className="text-error text-xs block">
                  {error.message}
                </span>
              )}
            </>
          )}
        />
      </div>
      <div>
        <Label
          htmlFor="message"
          text={t("content.message.text")}
          className="block"
        />
        <Controller
          name="message"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: t("errors.message.required") },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <Textarea
                variant={error ? "error" : "primary"}
                placeholder={t("content.message.placeholder")}
                id="message"
                tabIndex={3}
                inputMode="text"
                value={field.value}
                onChange={field.onChange}
              />
              {error && (
                <span className="text-error text-xs block">
                  {error.message}
                </span>
              )}
            </>
          )}
        />
      </div>

      <Button
        onClick={onSubmit}
        variant={isLoading ? "textIcon" : "primary"}
        disabled={isLoading}
      >
        {isLoading && <LoaderCircle className="motion-safe:animate-spin" />}
        {t("actions.button")}
      </Button>
    </form>
  );
}
