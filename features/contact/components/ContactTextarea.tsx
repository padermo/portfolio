import TextArea from "@/components/ui/TextArea";
import type { ContactTextareaProps } from "../types";
import Error from "@/components/ui/Error";

export default function ContactTextarea({ registration, error, placeholder }: ContactTextareaProps) {
  return (
    <div className="py-2">
      <TextArea {...registration} aria-invalid={!!error} placeholder={placeholder} className="w-full" rows={6} />
      {error && (<Error className="block" role="alert">{error}</Error>)}
    </div>
  )
}
