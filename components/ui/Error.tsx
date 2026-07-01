import { cn } from "@/lib/utils/cn";

const errorStyle = "text-xs text-red-500 font-poppins"

interface ErrorProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const Error: React.FC<ErrorProps> = ({ children, className, ...props }) => {

  return <span className={cn(errorStyle, className)} {...props}>{children}</span>
}

export default Error;
