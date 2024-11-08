import React from "react";
import Group from "../Base/Group";
import { MOBILE_NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavBottom() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 w-full bg-white lg:hidden  border-t-2 border shadow-lg">
      <Group justify="around" align="center" className="h-full pt-1">
        {MOBILE_NAV_LINKS.links.map((item) => (
          <Link href={item.href} key={item.label}>
            <Group
              vertical
              align="center"
              gap="gap-1"
              className={cn(
                "cursor-pointer h-full py-2",
                pathname === item.href
                  ? "text-primary border-b-[3px] border-primary "
                  : " text-gray-400"
              )}
              onClick={item.onClick}
            >
              <div
                className={cn(
                  "rounded-full border p-2",
                  pathname === item.href
                    ? "text-2xl border-primary"
                    : "text-2xl"
                )}
              >
                {item.icon}
              </div>
              <p className="text-xs">{item.label}</p>
            </Group>
          </Link>
        ))}
      </Group>
    </div>
  );
}
