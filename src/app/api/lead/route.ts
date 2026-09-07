import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Simulate saving lead to CRM / Google Sheets / n8n webhook
    console.log("New Lead Captured:", { name, email, phone, message, timestamp: new Date() });

    return NextResponse.json({
      success: true,
      message: "Inquiry received. Our team will get back to you shortly.",
    });
  } catch (error) {
    console.error("API Lead Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
