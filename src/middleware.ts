import { withAuth } from "next-auth/middleware";

export default withAuth({
  // Matches the pages config in `[...nextauth]`
  pages: {
    signIn: "/login",
  },
});

// use this to set only protected routes
export const config = { matcher: ["/cars"] };
