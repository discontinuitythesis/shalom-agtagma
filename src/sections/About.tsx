import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SITE } from "../lib/site";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c05b33]">
            <span className="h-px w-10 bg-[#c05b33]" /> 01 / About
          </p>
          <h2 className="font-serif-d text-4xl font-medium leading-[1.05] tracking-tight text-[#1e3050] md:text-6xl">
            Calm operator.
            <br />
            <em className="text-[#c05b33]">Curious builder.</em>
          </h2>
          <p className="mt-6 font-serif-d text-xl italic text-[#8a8172]">
            Behind every smooth-running team is someone paying attention.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="space-y-5 text-base leading-relaxed text-[#6f6a60] md:text-lg">
            <p>
              I&apos;m an operations and executive support professional with
              nearly 20 years of experience helping CEOs, founders, and business
              owners streamline operations, manage remote teams, and scale
              sustainably.
            </p>
            <p>
              My work has spanned operations management, program management,
              executive support, digital marketing, eCommerce, consulting, real
              estate, luxury travel, and online service-based businesses.
            </p>
            <p>
              I&apos;m known for building communication systems that keep
              distributed teams focused, productive, and connected across North
              America, Europe, and Asia.
            </p>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 pt-2 font-semibold text-[#1e3050] underline decoration-[#c05b33]/60 decoration-2 underline-offset-4 transition-colors hover:text-[#c05b33]"
            >
              Connect on LinkedIn
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
