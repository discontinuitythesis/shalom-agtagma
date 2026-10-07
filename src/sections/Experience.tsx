import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SITE } from "../lib/site";

const ROLES = [
  {
    period: "Dec 2025 — Sep 2026",
    org: "River Cruise Network · Discount Coach Tours · Wed In Destination",
    role: "Sales Manager (Global)",
    note: "Led a 14-person global sales and training operation across three travel brands.",
  },
  {
    period: "2023 — 2025",
    org: "MADX Digital, London",
    role: "SEO Project Manager → Sr. Operations & Program Manager",
    note: "Grew the team to ~30 people, built the operating rhythm, reporting and SOPs behind a scaling SEO agency.",
  },
  {
    period: "2025 — 2026",
    org: "KeiSha Link Builders",
    role: "Co-founder",
    note: "Paid backlinks, free-to-post links, and brand mentions — agency-grade process applied to link building.",
    link: SITE.keishaSite,
  },
  {
    period: "2024 — Present",
    org: "Stay N Cee, Makati",
    role: "Owner & Founder",
    note: "Short and long term rentals — my own small business, run end to end.",
  },
  {
    period: "2022 — 2026",
    org: "US clients — health, finance, lifestyle",
    role: "Executive Assistant & Marketing Support",
    note: "CRM and leads, email marketing, podcast and YouTube production, events, design — part-time roles alongside agency work.",
  },
  {
    period: "Earlier career",
    org: "Corporate & operations support, Manila",
    role: "Executive business support",
    note: "High-level support to a Senior Vice President and 15 directors; ran daily shuttle logistics for up to 800 employees.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <Reveal>
        <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c05b33]">
          <span className="h-px w-10 bg-[#c05b33]" /> 03 / Experience
        </p>
        <h2 className="font-serif-d max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight text-[#1e3050] md:text-6xl">
          Experience that <em className="text-[#c05b33]">travels well.</em>
        </h2>
        <p className="mt-5 max-w-2xl text-[#6f6a60] md:text-lg">
          From travel and real estate to digital agencies and online businesses,
          I&apos;ve worked across environments where trust, pace, and detail
          matter.
        </p>
      </Reveal>

      <div className="mt-14 flex flex-col">
        {ROLES.map((r, i) => (
          <Reveal key={r.org} delay={Math.min(i * 0.06, 0.3)}>
            <div className="group grid gap-2 border-t border-[#e2d8c6] py-8 transition-colors last:border-b hover:bg-[#efe7da]/60 md:grid-cols-[180px_1fr_auto] md:items-baseline md:gap-8 md:px-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#8a8172]">
                {r.period}
              </p>
              <div>
                <h3 className="font-serif-d text-2xl font-medium text-[#1e3050]">
                  {r.link ? (
                    <a
                      href={r.link}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-[#c05b33]/50 decoration-2 underline-offset-4 transition-colors hover:text-[#c05b33]"
                    >
                      {r.org}
                    </a>
                  ) : (
                    r.org
                  )}
                </h3>
                <p className="mt-1 font-semibold text-[#c05b33]">{r.role}</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6f6a60]">
                  {r.note}
                </p>
              </div>
              {r.link && (
                <ArrowUpRight className="hidden h-5 w-5 text-[#c05b33] opacity-0 transition-opacity group-hover:opacity-100 md:block" />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
