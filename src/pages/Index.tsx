import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Separator } from "@/components/ui/separator";

export default function Index() {
  return (
    <div className="bg-[#fff] min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-6">
        <Header />
        <div className="space-y-16 py-8">
          <Hero />
          <Separator className="my-8" />
          <Experience />
          <Separator className="my-8" />
          <Education />
          <Separator className="my-8" />
          <Skills />
          <Separator className="my-8" />
          <Projects />
          <Contact />
        </div>
      </div>
      <footer className="text-xs text-muted text-center py-12 border-t border-gray-200 mt-24 font-walsheim" aria-label="Site footer">
        &copy; {new Date().getFullYear()} Yuvraj Anupam Chauhan. All rights reserved.
      </footer>
    </div>
  );
}
