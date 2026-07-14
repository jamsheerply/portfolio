import Experience from "@/components/main/Experience";
import Education from "@/components/main/Education";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full relative z-[10]">
      <div className="flex flex-col gap-12 md:gap-20">
        <Hero />
        <Skills />
        <Experience />
        <Education />
      </div>
    </main>
  );
}
