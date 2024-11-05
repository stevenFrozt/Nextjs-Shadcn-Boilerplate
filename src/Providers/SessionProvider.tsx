"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

type props = { children: React.ReactNode };
export default function SessionProviderWrapper({ children }: props) {
  return <SessionProvider>{children}</SessionProvider>;
}
