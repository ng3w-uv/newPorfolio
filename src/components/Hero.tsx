import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  // Scrolls smoothly to the next section
  const handleArrowClick = () => {
    const nextSection = document.querySelector("#experience");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between min-h-[85vh] max-w-4xl mx-auto px-6 relative"
      aria-label="Hero Section"
    >
      {/* LEFT: CONTENT */}
      <div className="flex-1 text-left flex flex-col justify-center pt-12 md:pt-0">
        <div className="mb-4 text-muted text-lg font-walsheim">Hey, I&apos;m</div>
        <h1
          className="font-walsheim text-[3.5rem] md:text-[6rem] font-medium bg-gradient-to-br from-primary to-blue-400 bg-clip-text text-transparent mb-4 leading-[1.05] tracking-tight text-left"
          style={{ fontWeight: 500 }}
        >
          Darlene <span className="block md:inline text-blue-400">Robertson</span>
        </h1>
        <p className="text-gray-600 text-lg mt-6 mb-10 font-walsheim max-w-2xl text-left leading-relaxed">
          I&apos;m a software engineer based in Toronto, Canada and also a communication and journalism student. I enjoy creating things that live on the internet, whether that be websites, apps, or anything in between.
          <br className="my-3" />
          I have been freelancing for a year while studying, and have gained a decent amount of valuable experience from all different kinds of projects/work.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4 mt-6 max-w-screen-sm">
          <a href="mailto:hello@email.com" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2 px-6 py-2 h-12">
              <Mail size={18} />
              Send an email
            </Button>
          </a>
          <a href="https://linkedin.com/" target="_blank" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2 px-6 py-2 h-12">
              <Linkedin size={18} />
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/" target="_blank" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2 px-6 py-2 h-12">
              <Github size={18} />
              Github
            </Button>
          </a>
        </div>
      </div>
      {/* RIGHT: DESKTOP SCROLL ARROW */}
      <div className="hidden md:flex flex-col items-center justify-center min-h-[390px]">
        <button
          aria-label="Scroll down to next section"
          className="group focus:ring-2 focus:ring-primary focus:outline-none hover-scale p-4"
          onClick={handleArrowClick}
          tabIndex={0}
          style={{ border: "none", background: "transparent" }}
        >
          <ArrowDown
            size={44}
            className="text-primary group-hover:text-blue-400 transition-colors"
            aria-hidden="true"
          />
          <span className="mt-2 text-xs text-muted font-medium">Scroll</span>
        </button>
      </div>
    </section>
  );
}
