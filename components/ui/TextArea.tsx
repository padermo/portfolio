import { inputStyle } from "@/lib/styles/input";
import { cn } from "@/lib/utils/cn";

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: React.FC<TextAreaProps> = ({ className, ...props }) => {

  return <textarea
    className={cn(inputStyle, "resize-none py-2 h-auto", className)}
    {...props}
  />
}

export default TextArea;
