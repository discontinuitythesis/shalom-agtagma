import { Nav } from "../sections/Nav";
import { Hero } from "../sections/Hero";
import { Marquee } from "../sections/Marquee";
import { About } from "../sections/About";
import { Services } from "../sections/Services";
import { Experience } from "../sections/Experience";
import { Video } from "../sections/Video";
import { Contact } from "../sections/Contact";

export default function Home() {
  return (
    <div className="grain min-h-screen bg-[#f6f1e9] text-[#23272e]">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Experience />
        <Video />
        <Contact />
      </main>
    </div>
  );
}
