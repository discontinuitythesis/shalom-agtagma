import { Reveal } from "../components/Reveal";

const SERVICES = [
  {
    title: "Operations management",
    desc: "Make the business easier to run: priorities, rhythms, documentation, and follow-through.",
  },
  {
    title: "Remote team leadership",
    desc: "Help distributed people communicate clearly, stay accountable, and feel part of the same team.",
  },
  {
    title: "Projects & programmes",
    desc: "Turn moving parts into a plan, a cadence, and a finish line everyone can see.",
  },
  {
    title: "Executive support",
    desc: "Create breathing room for leaders through thoughtful coordination and trusted support.",
  },
  {
    title: "Process & automation",
    desc: "Spot the friction, simplify the handoffs, and use the right tools — including AI — to make work lighter.",
  },
  {
    title: "Client & vendor management",
    desc: "Keep relationships warm, expectations clear, and the details moving in the right direction.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-y border-[#e2d8c6] bg-[#efe7da]">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c05b33]">
            <span className="h-px w-10 bg-[#c05b33]" /> 02 / What I do
          </p>
          <h2 className="font-serif-d max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight text-[#1e3050] md:text-6xl">
            Practical support for the{" "}
            <em className="text-[#c05b33]">work behind the work.</em>
          </h2>
          <p className="mt-5 max-w-2xl text-[#6f6a60] md:text-lg">
            The best systems are the ones people actually use. I build clear,
            lightweight ways of working that help teams make decisions and keep
            promises.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[#e2d8c6] bg-[#e2d8c6] sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.1} className="h-full">
              <div className="group flex h-full flex-col bg-[#f6f1e9] p-8 transition-colors duration-500 hover:bg-[#1e3050]">
                <span className="font-serif-d text-sm font-semibold text-[#c05b33]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif-d mt-5 text-2xl font-medium leading-snug text-[#1e3050] transition-colors duration-500 group-hover:text-[#f6f1e9]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6f6a60] transition-colors duration-500 group-hover:text-[#c8cdd8]">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
