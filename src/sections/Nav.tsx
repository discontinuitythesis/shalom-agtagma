import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { SITE } from "../lib/site";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "What I do", href: "#services" },
  { label: "Experience", href: "#experience" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[#e2d8c6] bg-[#f6f1e9]/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-serif-d text-2xl font-semibold tracking-tight text-[#1e3050]">
          Shalom<span className="text-[#c05b33]">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#6f6a60] transition-colors hover:text-[#1e3050]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.mailtoHello}
            className="group hidden items-center gap-1.5 rounded-full bg-[#1e3050] px-5 py-2.5 text-sm font-semibold text-[#f6f1e9] transition-all hover:bg-[#c05b33] sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-[#6f6a60] md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#e2d8c6] bg-[#f6f1e9]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-5 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#ece3d2] py-3 text-sm font-medium text-[#23272e]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={SITE.mailtoHello}
              className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#1e3050] px-5 py-2.5 text-sm font-semibold text-[#f6f1e9]"
            >
              Let&apos;s talk <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
