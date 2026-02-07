import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators/contact";
import { sendContactEmail } from "@/lib/mail";
import { rateLimit } from "@/lib/security/rate-limit";

export async function POST(req: Request) {
  try {
    // Basic rate limit (per IP best-effort; see lib/security/rate-limit.ts)
    const rl = await rateLimit(req, { limit: 10, windowMs: 60_000 });
    if (!rl.ok) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const json = await req.json();
    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data.", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    await sendContactEmail(parsed.data);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
