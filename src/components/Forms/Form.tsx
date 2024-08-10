"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, message } from "antd";
import { useTranslations } from "next-intl";
import axios from "axios";
import type { FormInputs } from "@/types/generals";

const { TextArea } = Input;

export default function Form() {
  const [messageApi, contextHolder] = message.useMessage();
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
        messageApi.open({
          type: "success",
          content: t("server.success"),
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        messageApi.open({
          type: "error",
          content: t("server.bad"),
        });
      }
    } finally {
      reset();
      setIsLoading(false);
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 w-full lg:px-8">
      <div>
        <label
          htmlFor="email"
          className="text-[#222] text-base font-light tracking-wide dark:text-white"
        >
          {t("content.email.text")}
        </label>
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
                status={error && "error"}
                className="border px-3 py-2 text-[#222] placeholder:text-[#666] dark:placeholder:text-gray-400 dark:text-white"
                placeholder={t("content.email.placeholder")}
                id="email"
                value={field.value}
                onChange={field.onChange}
              />
              {error && (
                <span className="text-[#B8001C] text-xs block">
                  {error.message}
                </span>
              )}
            </>
          )}
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="text-[#222] text-base font-light tracking-wide dark:text-white"
        >
          {t("content.subject.text")}
        </label>
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
                status={error && "error"}
                className="border px-3 py-2 text-[#222] placeholder:text-[#666] dark:placeholder:text-gray-400 dark:text-white"
                placeholder={t("content.subject.placeholder")}
                id="subject"
                value={field.value}
                onChange={field.onChange}
              />
              {error && (
                <span className="text-[#B8001C] text-xs block">
                  {error.message}
                </span>
              )}
            </>
          )}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="text-[#222] text-base font-light tracking-wide dark:text-white"
        >
          {t("content.message.text")}
        </label>
        <Controller
          name="message"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: t("errors.message.required") },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <TextArea
                status={error && "error"}
                className="border px-3 py-2 text-[#222] placeholder:text-[#666] dark:placeholder:text-gray-400 dark:text-white"
                placeholder={t("content.message.placeholder")}
                id="message"
                value={field.value}
                onChange={field.onChange}
                style={{ resize: "none" }}
              />
              {error && (
                <span className="text-[#B8001C] text-xs block">
                  {error.message}
                </span>
              )}
            </>
          )}
        />
      </div>

      <Button
        onClick={onSubmit}
        type="primary"
        loading={isLoading}
        className="border-none h-auto px-3 py-2 bg-[#CFB53B] font-medium text-[#222]"
      >
        {t("actions.button")}
      </Button>
      {contextHolder}
    </form>
  );
}
