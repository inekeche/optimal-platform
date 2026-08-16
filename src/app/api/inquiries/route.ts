import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, serviceType, message } = body;

    // Basic server-side validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Here you can integrate Resend/SendGrid or save directly to Database
    console.log("New Inspection Request:", {
      fullName,
      email,
      phone,
      serviceType,
      message,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Inspection request submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}