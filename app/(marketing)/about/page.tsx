"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              {t("about.hero.title")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {t("about.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 border-t border-white/5">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white">
                {t("about.mission.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.mission.desc")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white">
                {t("about.vision.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.vision.desc")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white/5 border-y border-white/5">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {t("about.values.title")}
            </h2>
            <p className="text-muted-foreground">{t("about.values.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: t("about.values.security"),
                desc: t("about.values.security.desc"),
              },
              {
                icon: Users,
                title: t("about.values.collab"),
                desc: t("about.values.collab.desc"),
              },
              {
                icon: Zap,
                title: t("about.values.innovation"),
                desc: t("about.values.innovation.desc"),
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black border border-white/10 p-8 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white group-hover:text-primary group-hover:bg-primary/10 transition-colors mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
            {t("about.cta.title")}
          </h2>

          <Link href="/contact">
            <Button className="h-14 px-8 text-lg bg-primary text-black hover:bg-primary/90 font-bold rounded-none skew-x-[-10deg]">
              <span className="skew-x-[10deg]">
                {t("about.cta.button")}
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
