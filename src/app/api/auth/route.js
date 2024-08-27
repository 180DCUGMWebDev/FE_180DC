import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const { username, password } = await request.json();

  if (username === "a" && password === "a") {
    const token = jwt.sign({ username }, "secret_key", { expiresIn: "1h" });

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
