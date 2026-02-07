function required(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required environment variable: ${name}`);
  return v;
}

export function assertContactEnv() {
  required("CONTACT_TO_EMAIL");
  required("RESEND_API_KEY");
}
