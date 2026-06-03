export { default } from "next-auth/middleware";
import withAuth from "next-auth/middleware";
// import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// export default function proxy(req: NextRequest, event: any) {
//   return withAuth(req, event);
// }

export const config = {
    matcher: [
        "/admin/:path*",
        "/seller/:path*",
        "/buyer/:path*",
    ],
};