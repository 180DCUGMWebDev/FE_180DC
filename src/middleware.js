// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export function middleware(req) {
//   const { pathname } = req.nextUrl;
//   const token = req.cookies.get("token");

//   console.log(pathname);

//   if (pathname.startsWith("/adminx")) {
//     if (!token) {
//       return NextResponse.redirect(new URL("/auth", req.url));
//     }

//     try {
//       jwt.verify(token, "secret_key"); // Memverifikasi token
//     } catch (err) {
//       return NextResponse.redirect(new URL("/auth", req.url));
//     }

//     return NextResponse.next();
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/adminx/:path*"], // Menentukan rute yang dilindungi
// };

// middleware.js
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = req.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  try {
    const secret = new TextEncoder().encode("secret_key"); // Replace with your actual secret
    const { payload } = await jwtVerify(token.value, secret);

    if (payload.role !== "admin") {
      return NextResponse.redirect(new URL("/not-authorized", req.url));
    }

    // Allow the request to continue if the user is an admin
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}

// Specify the routes where this middleware should apply
export const config = {
  matcher: "/admin", // Apply middleware to /admin and its subroutes
};
