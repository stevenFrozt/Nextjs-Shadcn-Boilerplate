import { NextAuthOptions } from "next-auth";
import { GOOGLE_ID, GOOGLE_SECRET, NEXTAUTH_SECRET } from "@/lib/env";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: NEXTAUTH_SECRET,
  pages: { signIn: "/login" },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "sample@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const dummyDatabase = [
          {
            id: "1",
            name: "J Smith",
            email: "qwerty123@asd.com",
            password: "123456",
          },
        ];
        const user = dummyDatabase.find(
          (i) =>
            i.email === credentials?.email &&
            i.password === credentials?.password
        );

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          // return null;
          throw new Error(
            JSON.stringify({
              errors: "Wrong Username Or Password",
              status: false,
            })
          );
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
};
