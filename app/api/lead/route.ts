import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { name, phone, email, serviceType, message } =
    body as Partial<LeadPayload>;

  if (!name?.trim() || !phone?.trim() || !email?.trim() || !serviceType?.trim()) {
    return NextResponse.json(
      {
        success: false,
        error: "Missing required fields: name, phone, email, serviceType",
      },
      { status: 422 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, error: "Invalid email format" },
      { status: 422 }
    );
  }

  const lead = {
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim(),
    serviceType: serviceType.trim(),
    message: message?.trim() || "",
    timestamp: new Date().toISOString(),
    source: "voltpro-website-quote-form",
  };

  console.log("[Lead Captured]", JSON.stringify(lead));

  const webhookUrl = process.env.WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const webhookBody = {
        text: `⚡ New Lead: ${lead.name} | ${lead.phone} | ${lead.serviceType}`,
        lead,
      };

      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      if (process.env.WEBHOOK_SECRET) {
        headers["Authorization"] = `Bearer ${process.env.WEBHOOK_SECRET}`;
      }

      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(webhookBody),
      });

      if (!webhookRes.ok) {
        console.error(`[Webhook Error] Status: ${webhookRes.status}`);
      }
    } catch (err) {
      console.error("[Webhook Network Error]", err);
    }
  } else {
    console.warn("[Webhook] WEBHOOK_URL not set — lead captured but not forwarded.");
  }

  return NextResponse.json({ success: true, message: "Lead received" }, { status: 200 });
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
