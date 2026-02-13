"use client";

import Link from "next/link";
import { useCallback } from "react";
import type { SVGProps } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Particles = dynamic(() => import("react-tsparticles").then((m: any) => m.default ?? m), { ssr: false });
import {
  ArrowRight,
  Shield,
  ShieldCheck,
  Zap,
  Database,
  CheckCircle2,
  Factory,
  Car,
  Stethoscope,
  Cpu,
  Sparkles,
  Cog,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Palette = "cyan" | "mint" | "violet";
const PALETTES: Record<Palette, string[]> = {
  cyan: ["#99f716ff", "#dff428ff", "#05ed1cff"],
  mint: ["#2dd4bf", "#99f6e4", "#34d399"],
  violet: ["#a78bfa", "#7dd3fc", "#e879f9"],
};

function BlockchainBackgroundDeep({ palette = "cyan" }: { palette?: Palette }) {
  const colors = PALETTES[palette];

  // import dinamico: evita errori di tipi/risoluzione
  const init = useCallback(async (engine: unknown) => {
    const { loadSlim } = await import("tsparticles-slim");
    await loadSlim(engine as any);
  }, []);

  const interactivity = (force: number, smooth = 20) => ({
    detectsOn: "window" as const,
    events: {
      onHover: {
        enable: true,
        mode: "grab",
        parallax: { enable: true, force, smooth },
      },
      resize: true,
    },
    modes: { grab: { distance: 200, links: { opacity: 0.75 } } },
  });

  return (
    <div className="absolute inset-0">
      <Particles
        id="trustup-back"
        init={init}
        className="absolute inset-0 pointer-events-none [filter:drop-shadow(0_0_6px_rgba(34,211,238,0.6))]"
        options={{
          fullScreen: { enable: false },
          background: { color: "#000000ff" },
          fpsLimit: 60,
          detectRetina: true,
          interactivity: interactivity(40, 20),
          particles: {
            number: { value: 90, density: { enable: true, area: 900 } },
            color: { value: colors },
            links: {
              enable: true,
              distance: 150,
              color: colors[0],
              opacity: 0.22,
              width: 1,
            },
            move: { enable: true, speed: 0.25, outModes: { default: "out" } },
            opacity: { value: 1 },
            size: { value: { min: 1, max: 2 } },
            shape: { type: "circle" },
          },
        }}
      />
      <Particles
        id="trustup-front"
        init={init}
        className="absolute inset-0 pointer-events-none mix-blend-screen"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          detectRetina: true,
          interactivity: interactivity(70, 18),
          particles: {
            number: { value: 100, density: { enable: true, area: 800 } },
            color: { value: colors },
            links: {
              enable: true,
              distance: 100,
              color: colors[1],
              opacity: 0.9,
              width: 1.2,
            },
            move: { enable: true, speed: 0.8, outModes: { default: "out" } },
            opacity: { value: 2 },
            size: { value: { min: 2, max: 4.5 } },
            shape: { type: "square" },
          },
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_70%)]" />
    </div>
  );
}

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Particles Background (al posto dell'immagine) */}
        <div className="absolute inset-0 z-0">
          <BlockchainBackgroundDeep palette="cyan" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-black/40 backdrop-blur-sm border border-primary/30 rounded-full mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary tracking-wider uppercase">
                {t("home.hero.badge")}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight">
              {t("home.hero.title")}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t("home.hero.subtitle")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/platform">
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-primary/90 text-lg px-8 py-6 rounded-none skew-x-[-10deg] transition-all duration-300 hover:scale-105"
                >
                  <span className="skew-x-[10deg] flex items-center gap-3">
                    {t("home.hero.cta")}
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-black text-lg px-8 py-6 rounded-none skew-x-[-10deg] transition-all duration-300 hover:scale-105"
                >
                  <span className="skew-x-[10deg] flex items-center gap-3">
                    {t("home.hero.demo")}
                  </span>
                </Button>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center gap-3 text-gray-400">
              <span className="text-sm uppercase tracking-wider">
                {t("home.scroll")}
              </span>
              <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-black/50 border-white/10 p-8 rounded-none hover:border-primary/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t("home.value.smartObject.title")}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {t("home.value.smartObject.desc")}
              </p>
            </Card>

            <Card className="bg-black/50 border-white/10 p-8 rounded-none hover:border-primary/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t("home.value.smartContract.title")}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {t("home.value.smartContract.desc")}
              </p>
            </Card>

            <Card className="bg-black/50 border-white/10 p-8 rounded-none hover:border-primary/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t("home.value.digitalTwin.title")}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {t("home.value.digitalTwin.desc")}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-32 bg-[#0A0A0A] border-y border-white/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="container px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight"
            >
              {t("home.problem.title")}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-stretch">
            {/* Left Card: The Problem (Legacy) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl" />
              <div className="relative h-full bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 hover:border-white/20 transition-colors duration-500">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                    <Database className="w-7 h-7 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {t("home.problem.current.title")}
                    </h3>
                    <span className="text-sm font-mono text-red-400 uppercase tracking-wider">
                      Legacy Systems
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-400 leading-relaxed mb-8 border-l-2 border-white/10 pl-6 italic">
                  "{t("home.problem.current.desc")}"
                </p>

                {/* List */}
                <ul className="space-y-5">
                  {(t("home.problem.current.list") as unknown as string[]).map(
                    (item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 group/item"
                      >
                        <div className="mt-1.5 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20 group-hover/item:border-red-500/40 transition-colors">
                          <XIcon className="w-3 h-3 text-red-500" />
                        </div>
                        <span className="text-gray-400 group-hover/item:text-gray-300 transition-colors">
                          {item}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </motion.div>

            {/* Right Card: The Solution (Trustup) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative h-full"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/50 to-blue-600/50 rounded-[26px] opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-700" />

              <div className="relative h-full bg-[#0F1115] border border-primary/30 rounded-3xl p-8 md:p-10 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                {/* Header */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                    <ShieldCheck className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {t("home.problem.solution.title")}
                    </h3>
                    <span className="text-sm font-mono text-primary uppercase tracking-wider">
                      Next Gen Platform
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xl text-white leading-relaxed mb-8 font-medium border-l-2 border-primary pl-6 relative z-10">
                  {t("home.problem.solution.desc")}
                </p>

                {/* List */}
                <ul className="space-y-5 relative z-10">
                  {(t("home.problem.solution.list") as unknown as string[]).map(
                    (item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 group/item"
                      >
                        <div className="mt-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 group-hover/item:scale-110 transition-transform">
                          <CheckCircle2 className="w-3.5 h-3.5 text-black font-bold" />
                        </div>
                        <span className="text-gray-200 group-hover/item:text-white transition-colors font-medium">
                          {item}
                        </span>
                      </li>
                    )
                  )}
                </ul>

                {/* Bottom Branding */}
                <div className="absolute bottom-6 right-8 opacity-10 pointer-events-none">
                  <span className="text-6xl font-display font-black text-white uppercase tracking-tighter">
                    Trustup
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                {t("home.industries.title")}
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                {t("home.industries.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-black/50 border-white/10 p-10 rounded-none hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 shrink-0">
                    <Car className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {t("home.industries.auto.title")}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {t("home.industries.auto.desc")}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-black/50 border-white/10 p-10 rounded-none hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 shrink-0">
                    <Factory className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {t("home.industries.manu.title")}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {t("home.industries.manu.desc")}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-black/50 border-white/10 p-10 rounded-none hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 shrink-0">
                    <Stethoscope className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {t("home.industries.medical.title")}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {t("home.industries.medical.desc")}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-black/50 border-white/10 p-10 rounded-none hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 shrink-0">
                    <Cpu className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {t("home.industries.electronics.title")}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {t("home.industries.electronics.desc")}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-black/50 border-white/10 p-10 rounded-none hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 shrink-0">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {t("home.industries.cosmetics.title")}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {t("home.industries.cosmetics.desc")}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-black/50 border-white/10 p-10 rounded-none hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 shrink-0">
                    <Cog className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {t("home.industries.machinery.title")}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {t("home.industries.machinery.desc")}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/use-cases">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary hover:text-black transition-all duration-300 rounded-none skew-x-[-10deg]"
                >
                  <span className="skew-x-[10deg] flex items-center gap-3">
                    {t("home.industries.cta")}
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-black" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-black/20 rotate-45" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-black/20 rotate-12" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-8">
              {t("home.cta.title")}
            </h2>
            <p className="text-xl md:text-2xl text-black/80 mb-12 leading-relaxed">
              {t("home.cta.subtitle")}
            </p>

            <Link href="/contact">
              <Button
                size="lg"
                className="bg-black text-primary hover:bg-black/90 text-lg px-12 py-6 rounded-none skew-x-[-10deg] transition-all duration-300 hover:scale-105"
              >
                <span className="skew-x-[10deg] flex items-center gap-3">
                  {t("home.cta.button")}
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Custom X Icon component
function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
