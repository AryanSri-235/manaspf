import { NextResponse } from "next/server";
import { siteConfig } from "@/data/courseData";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { plan, name, email, phone } = body;

    const selectedPlan = plan === "elite" ? siteConfig.pricing.elite : siteConfig.pricing.standard;

    // Simulate order creation or webhook integration with Razorpay / Stripe
    const order = {
      orderId: `order_${Date.now()}_${Math.random().toString(36).substring(7)}`,
      plan: selectedPlan.planId,
      amount: selectedPlan.amount,
      currency: "INR",
      amountFormatted: selectedPlan.priceInr,
      customer: {
        name: name || "Learner",
        email: email || "learner@example.com",
        phone: phone || "",
      },
      status: "created",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      message: "Checkout initialized successfully",
      order,
    });
  } catch (error) {
    console.error("API Checkout Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to initialize checkout" },
      { status: 500 }
    );
  }
}
