"use client";

import Link from "next/link";
import { Container } from "@/components/shared/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <Container className="py-10 text-sm text-slate-600">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TrustDAP</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-900">Privacy</Link>
            <Link href="/cookie" className="hover:text-slate-900">Cookie</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
