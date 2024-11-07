"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

type props = {
  children: React.ReactNode;
  session?: Session | null;
};
export default function SessionProviderWrapper({ children, session }: props) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
