import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import clsx from "clsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AVATAR_DROPDOWN_OPTIONS } from "@/lib/constants";

type props = {
  className?: string;
};
export default function NavAvatar({ className }: props) {
  return (
    <div className={clsx("", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {AVATAR_DROPDOWN_OPTIONS.map((i) => (
            <div key={i.group_label}>
              <DropdownMenuLabel className="text-xs">
                {i.group_label}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {i.items.map((item) => (
                <DropdownMenuItem key={item.label} className="cursor-pointer">
                  {item.label}
                </DropdownMenuItem>
              ))}
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
