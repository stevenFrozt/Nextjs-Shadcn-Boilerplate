import { cn } from "@/lib/utils";
import React from "react";

type props = {
  className?: string;
  children?: React.ReactNode;
};

export default function Container({ className, children }: props) {
  return (
    <div className={cn("w-full md:px-[8rem] px-[0.5rem]", className)}>
      {children}
    </div>
  );
}
