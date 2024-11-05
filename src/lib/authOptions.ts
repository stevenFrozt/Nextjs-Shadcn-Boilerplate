import { NextAuthOptions } from "next-auth";
import { GOOGLE_ID, GOOGLE_SECRET } from "@/lib/env";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
  ],
};
