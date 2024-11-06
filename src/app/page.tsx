"use client";

import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      {session ? (
        <h1>Welcome back</h1>
      ) : (
        <>
          <h1 className="text-red-500 text-xl">You are not Logged In</h1>
          <Button onClick={() => signIn("google")}> Sign in with Google</Button>
        </>
      )}
    </main>
  );
}
