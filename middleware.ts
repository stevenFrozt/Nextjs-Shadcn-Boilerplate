// middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // Your login page
  },
});

export const config = {
  matcher: ["/protected/:path*", "/cars"], // Define paths to protect
};
