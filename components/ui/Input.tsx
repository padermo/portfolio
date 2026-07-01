import { inputStyle } from "@/lib/styles/input";
import { cn } from "@/lib/utils/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ className, ...props }) => {

  return <input
    className={cn(inputStyle, className)}
    {...props} />
}

export default Input;
