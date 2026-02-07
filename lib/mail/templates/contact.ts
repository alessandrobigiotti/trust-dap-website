import type { ContactPayload } from "@/lib/validators/contact";

export function contactEmailText(p: ContactPayload) {
  return [
    "Nuovo messaggio dal form contatti",
    "",
    `Nome: ${p.name} ${p.surname}`,
    `Email: ${p.email}`,
    `Telefono: ${p.phone || "-"}`,
    `Azienda: ${p.company || "-"}`,
    "",
    "Messaggio:",
    p.message,
    "",
  ].join("\n");
}
