import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

type props = { children: React.ReactNode };

export default async function AuthProvider({ children }: props) {
  const session = await getServerSession(authOptions);

  return <>{children}</>;
}
