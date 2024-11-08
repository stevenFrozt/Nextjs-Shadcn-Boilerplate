import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AVATAR_DROPDOWN_OPTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import { getAvatarInitials } from "@/helpers/getAvatarInitials";
import { useRouter } from "next/navigation";

type props = {
  className?: string;
};
export default function NavAvatar({ className }: props) {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return <Link href={"/login"}>Sign In</Link>;
  }

  if (status === "loading") {
    return <AvatarSkeleton />;
  }

  return (
    <div className={cn("", className)}>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage
              src={session?.user?.image || "https://github.com/shadcn.png"}
            />
            <AvatarFallback className="bg-primary/20 text-primary">
              {getAvatarInitials(session?.user?.name || "U")}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {AVATAR_DROPDOWN_OPTIONS.map((i) => (
            <div key={i.group_label}>
              <DropdownMenuLabel className="text-xs">
                {i.group_label}
              </DropdownMenuLabel>
              <DropdownMenuItem>{session?.user?.name}</DropdownMenuItem>
              <DropdownMenuSeparator />
              {i.items.map((item) => (
                <DropdownMenuItem
                  key={item.label}
                  className="cursor-pointer"
                  onClick={item.onClick}
                >
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

function AvatarSkeleton() {
  return <Skeleton className="h-10 w-10 rounded-full"></Skeleton>;
}
