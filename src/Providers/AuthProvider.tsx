"use client";

import React from "react";

type props = { children: React.ReactNode };

export default function AuthProvider({ children }: props) {
  return <>{children}</>;
}
