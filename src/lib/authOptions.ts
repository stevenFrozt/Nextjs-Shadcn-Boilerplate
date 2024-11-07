import { NextAuthOptions } from "next-auth";
import { GOOGLE_ID, GOOGLE_SECRET, NEXTAUTH_SECRET } from "@/lib/env";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  secret: NEXTAUTH_SECRET,
  pages: { signIn: "/login" },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
  ],
};
