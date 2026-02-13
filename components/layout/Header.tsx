"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Globe, ChevronRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // prevent background scroll when mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t("nav.company"), href: "/company" },
    { name: t("nav.platform"), href: "/platform" },
    { name: t("nav.benefits"), href: "/benefits" },
    { name: t("nav.useCases"), href: "/use-cases" },
    { name: t("nav.technology"), href: "/technology" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-white/10 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative h-8 w-32">
            <img
              src="/trustup-logo.png"
              alt="TRUSTUP"
              className="absolute inset-0 h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              // Company dropdown
              if (link.href === "/company") {
                const active = pathname.startsWith("/about") || pathname.startsWith("/contact");
                return (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger className="outline-none">
                      <span
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary relative group flex items-center gap-1",
                          active ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4" />
                        <span
                          className={cn(
                            "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                            active ? "w-full" : ""
                          )}
                        />
                      </span>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="bg-background/95 backdrop-blur-xl border-white/10 p-2">
                      <Link href="/about">
                        <DropdownMenuItem className="cursor-pointer text-foreground hover:text-primary hover:bg-white/5 focus:bg-white/5 focus:text-primary">
                          {t("nav.about")}
                        </DropdownMenuItem>
                      </Link>
                      <Link href="/contact">
                        <DropdownMenuItem className="cursor-pointer text-foreground hover:text-primary hover:bg-white/5 focus:bg-white/5 focus:text-primary">
                          {t("nav.contact")}
                        </DropdownMenuItem>
                      </Link>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              // Platform dropdown
              if (link.href === "/platform") {
                const active = pathname.startsWith("/platform");
                return (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger className="outline-none">
                      <span
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary relative group flex items-center gap-1",
                          active ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4" />
                        <span
                          className={cn(
                            "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                            active ? "w-full" : ""
                          )}
                        />
                      </span>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="bg-background/95 backdrop-blur-xl border-white/10 p-2">
                      <Link href="/platform">
                        <DropdownMenuItem className="cursor-pointer text-foreground hover:text-primary hover:bg-white/5 focus:bg-white/5 focus:text-primary">
                          {t("nav.overview")}
                        </DropdownMenuItem>
                      </Link>
                      <Link href="/platform/digital-asset-passport">
                        <DropdownMenuItem className="cursor-pointer text-foreground hover:text-primary hover:bg-white/5 focus:bg-white/5 focus:text-primary">
                          {t("nav.dap")}
                        </DropdownMenuItem>
                      </Link>
                      <Link href="/platform/verified-data-layer">
                        <DropdownMenuItem className="cursor-pointer text-foreground hover:text-primary hover:bg-white/5 focus:bg-white/5 focus:text-primary">
                          {t("nav.vdl")}
                        </DropdownMenuItem>
                      </Link>
                      <Link href="/platform/smart-contracts">
                        <DropdownMenuItem className="cursor-pointer text-foreground hover:text-primary hover:bg-white/5 focus:bg-white/5 focus:text-primary">
                          {t("nav.sc")}
                        </DropdownMenuItem>
                      </Link>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              // Technology dropdown
              if (link.href === "/technology") {
                const active = pathname.startsWith("/technology");
                return (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger className="outline-none">
                      <span
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary relative group flex items-center gap-1",
                          active ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4" />
                        <span
                          className={cn(
                            "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                            active ? "w-full" : ""
                          )}
                        />
                      </span>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="bg-background/95 backdrop-blur-xl border-white/10 p-2">
                      <Link href="/technology">
                        <DropdownMenuItem className="cursor-pointer text-foreground hover:text-primary hover:bg-white/5 focus:bg-white/5 focus:text-primary">
                          {t("nav.overview")}
                        </DropdownMenuItem>
                      </Link>
                      <Link href="/technology/open-source">
                        <DropdownMenuItem className="cursor-pointer text-foreground hover:text-primary hover:bg-white/5 focus:bg-white/5 focus:text-primary">
                          {t("nav.opensource")}
                        </DropdownMenuItem>
                      </Link>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              // Normal link
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative group",
                    active ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                      active ? "w-full" : ""
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Actions (NO LOGIN) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "it" ? "en" : "it")}
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-sm uppercase"
            >
              <Globe className="w-4 h-4" />
              <span>{language}</span>
            </button>

            <Link href="/contact">
              <Button
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary hover:text-black transition-all duration-300 rounded-none skew-x-[-10deg]"
              >
                <span className="skew-x-[10deg] flex items-center gap-2">
                  {t("nav.demo")} <ChevronRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen((v) => !v)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile overlay (NO LOGIN) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl md:hidden animate-in fade-in slide-in-from-top-10 duration-300">
          <div className="flex items-center justify-between px-4 pt-5 pb-4 border-b border-white/10">
            <Link
              href="/"
              className="flex items-center gap-2 relative h-8 w-32"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img
                src="/trustup-logo.png"
                alt="TRUSTUP"
                className="absolute inset-0 h-8 w-auto object-contain"
              />
            </Link>
            <button aria-label="Close menu" className="text-foreground" onClick={() => setMobileMenuOpen(false)}>
              <X />
            </button>
          </div>

          <div className="h-[calc(100svh-72px)] overflow-y-auto px-6 py-6">
            <nav className="flex flex-col gap-6 pb-10">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="company" className="border-white/10">
                  <AccordionTrigger className="py-3 text-2xl font-display font-bold text-foreground hover:no-underline leading-tight">
                    {t("nav.company")}
                  </AccordionTrigger>
                  <AccordionContent className="pl-4 border-l border-white/10 space-y-3">
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-muted-foreground hover:text-primary transition-colors leading-snug">
                      {t("nav.about")}
                    </Link>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-muted-foreground hover:text-primary transition-colors leading-snug">
                      {t("nav.contact")}
                    </Link>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="platform" className="border-white/10">
                  <AccordionTrigger className="py-3 text-2xl font-display font-bold text-foreground hover:no-underline leading-tight">
                    {t("nav.platform")}
                  </AccordionTrigger>
                  <AccordionContent className="pl-4 border-l border-white/10 space-y-3">
                    <Link href="/platform" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-muted-foreground hover:text-primary transition-colors leading-snug">
                      {t("nav.overview")}
                    </Link>
                    <Link href="/platform/digital-asset-passport" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-muted-foreground hover:text-primary transition-colors leading-snug">
                      {t("nav.dap")}
                    </Link>
                    <Link href="/platform/verified-data-layer" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-muted-foreground hover:text-primary transition-colors leading-snug">
                      {t("nav.vdl")}
                    </Link>
                    <Link href="/platform/smart-contracts" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-muted-foreground hover:text-primary transition-colors leading-snug">
                      {t("nav.sc")}
                    </Link>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="technology" className="border-white/10">
                  <AccordionTrigger className="py-3 text-2xl font-display font-bold text-foreground hover:no-underline leading-tight">
                    {t("nav.technology")}
                  </AccordionTrigger>
                  <AccordionContent className="pl-4 border-l border-white/10 space-y-3">
                    <Link href="/technology" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-muted-foreground hover:text-primary transition-colors leading-snug">
                      {t("nav.overview")}
                    </Link>
                    <Link href="/technology/open-source" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-muted-foreground hover:text-primary transition-colors leading-snug">
                      {t("nav.opensource")}
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link href="/benefits" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors leading-tight">
                {t("nav.benefits")}
              </Link>

              <Link href="/use-cases" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors leading-tight">
                {t("nav.useCases")}
              </Link>

              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors leading-tight">
                Blog
              </Link>

              <div className="pt-6 border-t border-white/10 flex flex-col gap-5">
                <button
                  onClick={() => {
                    setLanguage(language === "it" ? "en" : "it");
                    setMobileMenuOpen(false);
                  }}
                  className="text-base text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 uppercase"
                >
                  <Globe className="w-5 h-5" />
                  <span>{language === "it" ? "Italiano" : "English"}</span>
                </button>

                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full text-base py-6 bg-primary text-black hover:bg-primary/90">
                    {t("nav.demo")}
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
