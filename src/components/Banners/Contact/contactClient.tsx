"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useAlert } from "@/context/AlertContext";
import type { Alerts, Inputs } from "./contact.types";

interface FormInputs {
  email: string;
  subject: string;
  message: string;
}

interface Props {
  title: string;
  inputs: Inputs;
  alerts: Alerts;
  button: string;
}

export const ContactClient = ({ title, inputs, alerts, button }: Props) => {
  const { success, warning } = useAlert();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleSubmit, control, reset } = useForm<FormInputs>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send email");
      }

      success(alerts.success);
      reset();
    } catch (error) {
      warning(alerts.bad);
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <div id="contact">
      <h3>{title}</h3>
      <form onSubmit={onSubmit} className="flex flex-col gap-3 w-full">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: inputs.email.required },
            pattern: {
              value:
                /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/,
              message: inputs.email.invalid,
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <input
                placeholder={inputs.email.placeholder}
                inputMode="email"
                autoComplete="email"
                id="email"
                value={field.value}
                onChange={field.onChange}
                className={error && "error"}
                aria-label={inputs.email.placeholder}
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
            required: { value: true, message: inputs.subject.required },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <input
                placeholder={inputs.subject.placeholder}
                inputMode="text"
                id="subject"
                value={field.value}
                onChange={field.onChange}
                className={error && "error"}
                aria-label={inputs.subject.placeholder}
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
            required: { value: true, message: inputs.message.required },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <textarea
                placeholder={inputs.message.placeholder}
                id="message"
                inputMode="text"
                value={field.value}
                onChange={field.onChange}
                className={error && "error"}
                aria-label={inputs.message.placeholder}
              />
              {error && (
                <span className="text-error text-xs block">
                  {error.message}
                </span>
              )}
            </>
          )}
        />

        <button
          aria-label={button}
          onClick={onSubmit}
          type="submit"
          className="button-primary"
          disabled={isLoading}
        >
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
          {button}
        </button>
      </form>
    </div>
  );
};
