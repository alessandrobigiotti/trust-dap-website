import type { ContactPayload } from "@/lib/validators/contact";
import { assertContactEnv } from "@/lib/env";
import { contactEmailText } from "@/lib/mail/templates/contact";

/**
 * Mail sender stub.
 * To enable Resend:
 * 1) npm i resend
 * 2) implement resend client here
 */
export async function sendContactEmail(payload: ContactPayload) {
  assertContactEnv();

  const to = process.env.CONTACT_TO_EMAIL!;
  const subject = `Nuovo contatto: ${payload.name} ${payload.surname}`;
  const text = contactEmailText(payload);

  // STUB: replace with provider call
  console.log("[MAIL:stub]", { to, subject, text });

  return { ok: true };
}
