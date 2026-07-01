import { cn } from "@/lib/utils/cn";
import type { AlertProps } from "@/providers/AlertProvider";

type Props = AlertProps;

export default function Alert({ type, text }: Props) {
  return (
    <div className="fixed top-3 right-3 px-4 py-2 shadow-md shadow-background/50 backdrop-blur-lg rounded-md m-auto bg-background/50">
      <p className={cn("text-sm", {
        "text-green-500": type === "success",
        "text-primary": type === "info",
        "text-red-500": type === "warning",
      })}
      >
        {text}
      </p>
    </div>
  );
}
