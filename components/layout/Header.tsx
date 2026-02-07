"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/shared/Container";

type Item = { label: string; href: string };

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: Item[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-2 text-sm text-slate-200 hover:text-white"
      >
        {label}
        <span className="text-xs">▾</span>
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-3 w-56 rounded-xl border border-slate-800 bg-black/95 p-2 shadow-xl">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-white"
            >
              {it.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900 bg-black/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* If you have the logo in /public/images/trustup-logo.svg change src */}
          <span className="text-lg font-semibold tracking-wide text-white">
            TRUSTUP
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Dropdown
            label="Azienda"
            items={[
              { label: "Chi siamo", href: "/about" },
              { label: "Team", href: "/about#team" },
            ]}
          />
          <Dropdown
            label="Piattaforma"
            items={[
              { label: "Panoramica", href: "/platform" },
              { label: "Funzionalità", href: "/platform#features" },
            ]}
          />
          <Link className="text-sm text-slate-200 hover:text-white" href="/benefits">
            Vantaggi
          </Link>
          <Link className="text-sm text-slate-200 hover:text-white" href="/use-cases">
            Casi d&apos;Uso
          </Link>
          <Dropdown
            label="Tecnologia"
            items={[
              { label: "Architettura", href: "/technology" },
              { label: "Sicurezza", href: "/technology#security" },
            ]}
          />
          <Link className="text-sm text-slate-200 hover:text-white" href="/pricing">
            Prezzi
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language switch placeholder (wire to LanguageContext if you want) */}
          <button className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 md:flex">
            🌐 IT
          </button>

          {/* REMOVE "Accedi" – not included */}

          <Link
            href="/contact"
            className="rounded-xl border border-lime-400 px-4 py-2 text-sm font-medium text-lime-300 hover:bg-lime-400/10"
          >
            Richiedi Demo →
          </Link>
        </div>
      </Container>

      {/* Mobile nav can be added later */}
    </header>
  );
}
