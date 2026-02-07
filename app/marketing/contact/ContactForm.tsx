"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot (bots tend to fill it); keep it hidden in UI.
    const website = String(formData.get("website") || "");
    if (website) {
      setState("success");
      form.reset();
      return;
    }

    const payload = {
      name: String(formData.get("name") || ""),
      surname: String(formData.get("surname") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      company: String(formData.get("company") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.error || "Something went wrong. Please try again.");
        setState("error");
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setError("Network error. Please try again.");
      setState("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot */}
      <div className="hidden">
        <label>
          Website
          <input name="website" autoComplete="off" tabIndex={-1} />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="name" label="Name" required />
        <Input name="surname" label="Surname" required />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="email" label="Email" type="email" required />
        <Input name="phone" label="Phone" />
      </div>

      <Input name="company" label="Company" />

      <Textarea name="message" label="Message" rows={6} required />

      {state === "success" && (
        <p className="text-sm text-emerald-700">
          Thanks! Your message has been sent.
        </p>
      )}

      {state === "error" && error && (
        <p className="text-sm text-red-700">{error}</p>
      )}

      <Button type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
