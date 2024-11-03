import React from "react";
import clsx from "clsx";

type Props = {
  className?: string;
  vertical?: boolean;
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  gap?: string; // Define gap size using Tailwind spacing (e.g., "gap-4")
  children: React.ReactNode;
};

export default function Group({
  justify = "start",
  align = "start",
  vertical = false,
  gap = "",
  className,
  children,
}: Props) {
  // Map justify prop values to Tailwind CSS classes
  const justifyClass = (() => {
    switch (justify) {
      case "start":
        return "justify-start";
      case "end":
        return "justify-end";
      case "center":
        return "justify-center";
      case "between":
        return "justify-between";
      case "around":
        return "justify-around";
      case "evenly":
        return "justify-evenly";
      default:
        return "justify-start"; // default to start if no match
    }
  })();

  // Map align prop values to Tailwind CSS classes
  const alignClass = (() => {
    switch (align) {
      case "start":
        return "items-start";
      case "end":
        return "items-end";
      case "center":
        return "items-center";
      case "baseline":
        return "items-baseline";
      case "stretch":
        return "items-stretch";
      default:
        return "items-start"; // default to start if no match
    }
  })();

  return (
    <div
      className={clsx(
        "flex",
        vertical ? "flex-col" : "flex-row",
        justifyClass,
        alignClass,
        gap, // Add gap class directly
        className
      )}
    >
      {children}
    </div>
  );
}
