import clsx from "clsx";
import React from "react";

type props = {
  className?: string;
  children: React.ReactNode;
};

export default function Container({ className, children }: props) {
  return (
    <div className={clsx("w-full md:px-[8rem] px-[0.5rem]", className)}>
      {children}
    </div>
  );
}
