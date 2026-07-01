import type { InputProps } from "@/components/ui/Input";
import type { TextAreaProps } from "@/components/ui/TextArea";
import type { UseFormRegisterReturn } from "react-hook-form";

export interface ContactFormMessages {
  email: {
    placeholder: string;
    errors: {
      required: string;
      invalid: string;
    };
  };

  subject: {
    placeholder: string;
    errors: {
      required: string;
    };
  };

  message: {
    placeholder: string;
    errors: {
      required: string;
    };
  };
}

export type ContactInputProps = {
  registration: UseFormRegisterReturn;
  error?: string;
  placeholder: string;
} & Omit<InputProps, "placeholder">;

export type ContactTextareaProps = {
  registration: UseFormRegisterReturn;
  error?: string;
  placeholder: string;
} & Omit<TextAreaProps, "placeholder">;

export interface SubmitButtonProps {
  isSubmitting: boolean;
}

export interface ContactAlerts {
  success: string;
  warning: string;
}
