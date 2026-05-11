import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Process from "@/app/components/sections/Process";
import CareerTimeline from "@/app/components/sections/CareerTimeline";
import Education from "@/app/components/sections/Education";
import Skills from "@/app/components/sections/Skills";
import Portfolio from "@/app/components/sections/Portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Process />
      <CareerTimeline />
      <Education />
      <Skills />
      <Portfolio />
    </>
  );
}
