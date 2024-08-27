import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token");

  console.log(pathname);

  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/auth", req.url));
    }

    try {
      jwt.verify(token, "secret_key"); // Memverifikasi token
    } catch (err) {
      return NextResponse.redirect(new URL("/auth", req.url));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // Menentukan rute yang dilindungi
};
