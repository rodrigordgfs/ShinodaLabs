import { motion } from "framer-motion";
import { Code2, Layers, Rocket, Sparkle } from "lucide-react";
import avatar from "@/assets/avatar.webp";
import { SectionBackdrop } from "./SectionBackdrop";

const skills = [
  { icon: Code2, label: "Engenharia front-end", value: "VueJS, React, Next.js, TS" },
  { icon: Layers, label: "Arquitetura", value: "Escalável & modular" },
  { icon: Rocket, label: "Performance", value: "Core Web Vitals" },
  { icon: Sparkle, label: "Design system", value: "Tokens & motion" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-32">
      <SectionBackdrop variant="rings" align="left" />
      <div className="relative mx-auto max-w-6xl px-5 grid lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-3xl overflow-hidden card-premium aspect-[4/5]">
            <img
              src={avatar}
              alt="Fundador ShinodaLabs"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-display text-xl text-foreground">Rodrigo · Fundador</div>
              <div className="text-sm text-muted-foreground">
                Desenvolvedor de Sites · 7 anos de mercado
              </div>
            </div>
            <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-xs text-teal">
              ● Online
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-teal mb-4">/ Sobre</div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight text-foreground">
            Um estúdio focado no que <span className="text-gradient">poucos olham</span>: o detalhe.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Construo produtos digitais há quase uma década, unindo a precisão da engenharia com a
            sensibilidade do design. Cada pixel, cada milissegundo, cada microinteração — tudo é
            parte da experiência. Trabalho lado a lado com fundadores e times de produto que
            valorizam excelência.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Acredito em código limpo, design tokens, sistemas escaláveis e em entregar algo que
            pareça inevitável: o tipo de produto que faz o cliente dizer
            <span className="text-foreground"> "é exatamente isso"</span>.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            {skills.map((s) => (
              <div key={s.label} className="card-premium rounded-xl p-4 flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0">
                  <s.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm text-foreground font-medium">{s.label}</div>
                  <div className="text-xs text-muted-foreground">{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
