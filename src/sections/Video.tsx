import { Play } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SITE } from "../lib/site";

export function Video() {
  const id = SITE.youtubeVideoId.trim();
  const src = SITE.introVideo.trim();
  const base = import.meta.env.BASE_URL;

  return (
    <section className="border-y border-[#e2d8c6] bg-[#1e3050]">
      <div className="mx-auto max-w-5xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#e8b39d]">
            <span className="h-px w-10 bg-[#e8b39d]" /> A proper hello
          </p>
          <h2 className="font-serif-d max-w-2xl text-4xl font-medium leading-[1.05] tracking-tight text-[#f6f1e9] md:text-5xl">
            From chaos to cadence,{" "}
            <em className="text-[#e8b39d]">in under a minute.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-[#f6f1e9]/15 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.6)]">
            {src ? (
              <video
                className="block aspect-video w-full bg-[#f6f1e9]"
                src={`${base}${src}`}
                poster={SITE.introPoster ? `${base}${SITE.introPoster}` : undefined}
                controls
                playsInline
                preload="metadata"
                aria-label="Introduction video: Shalom Agtagma"
              />
            ) : id ? (
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
                  title="Introduction video — Shalom Agtagma"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 bg-[#16263f] text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#c05b33] transition-transform hover:scale-105">
                  <Play className="h-8 w-8 fill-[#f6f1e9] text-[#f6f1e9]" />
                </span>
                <p className="font-serif-d text-2xl italic text-[#f6f1e9]">
                  Intro video coming soon
                </p>
                <p className="max-w-sm text-sm text-[#8f9cb3]">
                  A short hello — who I am, how I work, and what it&apos;s like
                  to have me on your team.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
