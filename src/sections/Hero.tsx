import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Linkedin } from "lucide-react";
import { useRef } from "react";
import { SITE } from "../lib/site";

function CircularBadge() {
  return (
    <div className="spin-slow absolute -bottom-8 -left-8 hidden h-32 w-32 md:block">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <defs>
          <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <circle cx="50" cy="50" r="50" fill="#c05b33" />
        <text fill="#f6f1e9" fontSize="10.2" fontWeight="600" letterSpacing="2.2">
          <textPath href="#circlePath">
            AVAILABLE FOR NEW CLIENTS • OPERATIONS •
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#e9dcc6] blur-3xl" />
      <div className="pointer-events-none absolute -left-52 top-64 h-[26rem] w-[26rem] rounded-full bg-[#e3d2bf] opacity-70 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-32 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pt-40">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c05b33]"
          >
            <span className="h-px w-10 bg-[#c05b33]" />
            Operations · Executive support · Remote teams
          </motion.p>

          <h1 className="font-serif-d text-[clamp(3rem,8vw,6.2rem)] font-medium leading-[0.98] tracking-tight text-[#1e3050]">
            {["I make work", "feel possible."].map((line, li) => (
              <span key={line} className="block overflow-hidden pb-2">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.25 + li * 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  {li === 1 ? (
                    <em className="text-[#c05b33]">{line}</em>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-[#6f6a60]"
          >
            I help founders, agencies, and distributed teams build the systems,
            communication, and day-to-day rhythm that lets good work move
            forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-[#1e3050] px-7 py-3.5 text-sm font-semibold text-[#f6f1e9] transition-colors hover:bg-[#c05b33]"
            >
              See what I do
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d6cbb8] px-7 py-3.5 text-sm font-semibold text-[#1e3050] transition-colors hover:border-[#1e3050]"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-4"
          >
            {[
              ["Nearly 20 years", "in operations"],
              ["UK / US / APAC", "team experience"],
              ["Based in Manila", "works your hours"],
            ].map(([big, small]) => (
              <div key={big}>
                <p className="font-serif-d text-xl font-semibold text-[#1e3050]">{big}</p>
                <p className="text-sm text-[#6f6a60]">{small}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          style={{ y: yPortrait }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-t-full rounded-b-3xl bg-[#c05b33]/15" />
          <div className="relative overflow-hidden rounded-t-full rounded-b-3xl border-4 border-[#f6f1e9] shadow-[0_30px_80px_-30px_rgba(30,48,80,0.45)]">
            <img
              src="shalom-portrait.webp"
              alt="Portrait of Shalom Agtagma"
              className="h-full w-full object-cover"
              width={1024}
              height={1536}
            />
          </div>
          <CircularBadge />
        </motion.div>
      </div>
    </section>
  );
}
