"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useTranslations } from "next-intl";
import axios from "axios";
import { useAlert } from "@/context/AlertContext";

interface FormInputs {
  email: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const { success, warning } = useAlert();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const t = useTranslations("home.contact");
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
        success(t("alerts.success"));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        warning(t("alerts.bad"));
      }
    } finally {
      reset();
      setIsLoading(false);
    }
  });

  return (
    <div id="contact">
      <h3>{t("title")}</h3>
      <form onSubmit={onSubmit} className="flex flex-col gap-3 w-full">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: t("inputs.email.required") },
            pattern: {
              value:
                /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/,
              message: t("inputs.email.invalid"),
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <input
                placeholder={t("inputs.email.placeholder")}
                tabIndex={1}
                inputMode="email"
                autoComplete="email"
                id="email"
                value={field.value}
                onChange={field.onChange}
                className={error && "error"}
                aria-label={t("inputs.email.placeholder")}
              />
              {error && (
                <span className="text-error text-xs block">
                  {error.message}
                </span>
              )}
            </>
          )}
        />
        <Controller
          name="subject"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: t("inputs.subject.required") },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <input
                placeholder={t("inputs.subject.placeholder")}
                tabIndex={2}
                inputMode="text"
                id="subject"
                value={field.value}
                onChange={field.onChange}
                className={error && "error"}
                aria-label={t("inputs.subject.placeholder")}
              />
              {error && (
                <span className="text-error text-xs block">
                  {error.message}
                </span>
              )}
            </>
          )}
        />
        <Controller
          name="message"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: t("inputs.message.required") },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <textarea
                placeholder={t("inputs.message.placeholder")}
                id="message"
                tabIndex={3}
                inputMode="text"
                value={field.value}
                onChange={field.onChange}
                className={error && "error"}
                aria-label={t("inputs.subject.placeholder")}
              />
              {error && (
                <span className="text-error text-xs block">
                  {error.message}
                </span>
              )}
            </>
          )}
        />

        <button onClick={onSubmit} type="submit" disabled={isLoading}>
          {isLoading && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-loader-2 motion-safe:animate-spin"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3a9 9 0 1 0 9 9" />
            </svg>
          )}
          {t("button")}
        </button>
      </form>
    </div>
  );
};
