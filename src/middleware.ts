import { PATHS } from "@/PATHS";
import { getSessionCookie } from "better-auth/cookies";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("middleware");
  const sessionCookie = getSessionCookie(request);

  const isAuthenticated = !!sessionCookie;
  const privatePaths = [PATHS.profile];

  const isPrivatePaths = privatePaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (!isAuthenticated && isPrivatePaths) {
    const loginUrl = new URL(PATHS.loginByEmail, request.url);
    // loginUrl.searchParams.set("from", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  console.log("middleware next");

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Exclure les fichiers statiques et les API routes
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
