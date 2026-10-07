import { ArrowUpRight, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SITE } from "../lib/site";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-52 left-1/2 h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-[#e9dcc6] blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#c05b33]">
              Have a complex week?
            </p>
            <h2 className="font-serif-d text-5xl font-medium leading-[1.02] tracking-tight text-[#1e3050] md:text-7xl">
              Let&apos;s make it <em className="text-[#c05b33]">run better.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[#6f6a60] md:text-lg">
              Tell me what&apos;s moving, what&apos;s stuck, and what you want
              to make easier. I&apos;d love to hear about it.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-4">
            <a
              href={SITE.mailtoHello}
              className="group inline-flex items-center gap-2 rounded-full bg-[#1e3050] px-8 py-4 text-sm font-semibold text-[#f6f1e9] transition-colors hover:bg-[#c05b33]"
            >
              <Mail className="h-4 w-4" />
              {SITE.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d6cbb8] px-8 py-4 text-sm font-semibold text-[#1e3050] transition-colors hover:border-[#1e3050]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d6cbb8] px-8 py-4 text-sm font-semibold text-[#1e3050] transition-colors hover:border-[#1e3050]"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="relative border-t border-[#e2d8c6]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-[#8a8172] md:flex-row md:px-8">
          <p>© 2026 Shalom Agtagma</p>
          <p className="font-serif-d italic">Operations, with a human touch.</p>
        </div>
      </footer>
    </section>
  );
}
