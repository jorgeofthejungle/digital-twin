import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Process from "@/app/components/sections/Process";
import CareerTimeline from "@/app/components/sections/CareerTimeline";
import Skills from "@/app/components/sections/Skills";
import Portfolio from "@/app/components/sections/Portfolio";
import Contact from "@/app/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Process />
      <CareerTimeline />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}
