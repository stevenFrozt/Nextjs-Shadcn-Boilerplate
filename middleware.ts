import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = await getToken({ req: request });

  const baseUrl = request.nextUrl.origin + "/"; // http://localhost:3000/
  const loginPage = "/login";
  const unauthorizePage = "/unauthorize";

  // if user is already logged in if he is in root he redirect to /system
  if (token && request.url === baseUrl) {
    const url = new URL("/system", request.url);
    return NextResponse.redirect(url);
  }

  // if user is not logged in if he is in root he redirect to /login
  if (!token) {
    if (request.url === baseUrl) {
      const url = new URL(loginPage, request.url);
      return NextResponse.redirect(url);
    }
  }

  // IF USER IS ALREADY LOGGED IN then we protect this paths from users
  const protectedSessionPath = [loginPage, "/register"];
  if (isPathMatch(protectedSessionPath)) {
    if (token) {
      return NextResponse.rewrite(new URL(`/404`, request.url));
    }
  }

  // // PROTECT ROOT PATH ONLY ex: http://localhost:3000/
  // if (!token && request.url === baseUrl) {
  //   const url = new URL(loginPage, request.url)
  //   return NextResponse.redirect(url)
  // }

  //   ADMIN MIDDLEWARE
  const protectedAdminPath = ["/admin"];
  // console.log(token)
  if (isPathMatch(protectedAdminPath)) {
    if (!token) {
      const url = new URL(loginPage, request.url);
      url.searchParams.set("callbackUrl", encodeURI(request.url));
      return NextResponse.redirect(url);
    }
    if (token.role_name === "Judge") {
      const url = new URL(unauthorizePage, request.url);
      return NextResponse.rewrite(url);
    }
  }

  //   USER MIDDLEWARE
  const protectedUserPath = ["/"];

  if (isPathMatch(protectedUserPath)) {
    if (!token) {
      const url = new URL(loginPage, request.url);
      url.searchParams.set("callbackUrl", encodeURI(request.url));
      return NextResponse.redirect(url);
    }
  }

  /**
   *  IS PROTECTED PATH MATCHED FUNCTION
   * */
  function isPathMatch(paths: string[]) {
    const isMatch = paths.some((path) => pathname.startsWith(path));
    if (isMatch) return true;
    return false;
  }

  return NextResponse.next();
}
