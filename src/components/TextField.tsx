import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

type props = {
  className?: string;
  onChange: any;
  value: any;
  name: string;
  label?: string;
  placeholder?: string;
  helper?: string | boolean;
  type?: "text" | "password" | "number" | "email";
  touched?: boolean;
};
export default function TextField({
  className,
  onChange,
  value,
  name,
  label,
  placeholder,
  type,
  helper,
  touched = true,
}: props) {
  return (
    <div className={cn("w-full", className)}>
      <label htmlFor={name} className="text-slate-500 text-sm ">
        {label}
      </label>
      <Input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={cn(
          "mt-1 h-11   ",
          helper && touched ? "border-2 border-red-500 text-red-500" : ""
        )}
      />
      <p
        className={cn(
          "py-2 text-xs text-red-500",
          helper && touched ? "block" : "hidden"
        )}
      >
        {helper}
      </p>
    </div>
  );
}
