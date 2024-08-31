import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const { username, password } = await request.json();

  if (username === "a" && password === "a") {
    const token = jwt.sign({ username, role: "admin" }, "secret_key", {
      expiresIn: "1h",
    });

    return NextResponse.json({ token }, { status: 200 });
  } else {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }
}

export async function GET(request) {
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

export async function DELETE(request) {
  // Clear the cookie by setting an expired date
  return NextResponse.json(
    { message: "Logged out successfully" },
    { status: 200 }
  ).cookie("token", "", {
    httpOnly: true,
    path: "/",
    expires: new Date(0), // Expire the cookie immediately
  });
}
