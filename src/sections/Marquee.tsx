const ITEMS = [
  "Operations management",
  "Remote team leadership",
  "Executive support",
  "Process & automation",
  "Client & vendor management",
  "Projects & programmes",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-[#e2d8c6] bg-[#efe7da] py-5">
      <div className="marquee-track flex w-max items-center gap-10 pr-10">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap font-serif-d text-sm font-semibold uppercase tracking-[0.22em] text-[#8a8172]"
          >
            {item}
            <span className="text-[#c05b33]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
