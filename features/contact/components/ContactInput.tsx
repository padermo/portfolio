import Input from "@/components/ui/Input";
import type { ContactInputProps } from "../types";
import Error from "@/components/ui/Error";

export default function ContactInput({ registration, error, placeholder }: ContactInputProps) {
  return (
    <div className="py-2">
      <Input {...registration} aria-invalid={!!error} placeholder={placeholder} className="w-full" />
      {error && (<Error role="alert" className="block">{error}</Error>)}
    </div>
  )
}
