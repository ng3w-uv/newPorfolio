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
          className="font-walsheim text-[3.5rem] md:text-[6.5rem] font-medium bg-gradient-to-br from-primary to-blue-400 bg-clip-text text-transparent mb-4 leading-[1.05] tracking-tight text-left"
          style={{ fontWeight: 500 }}
        >
          Yuvraj <br /><span className="block md:inline text-blue-400">Chauhan</span>
        </h1>
        <div 
          className="text-gray-600 text-lg mt-6 mb-10 font-walsheim max-w-2xl text-left leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: `
              Incoming <b>MS in Computer Science</b> student at <b>Northeastern University, Boston</b> with experience in building <b>scalable backend systems</b> and impactful <b>health-tech solutions</b>. Passionate about <b>distributed systems</b>, <b>developer tools</b>, and using technology to solve real-world problems.
              <br class="my-3" />
              Skilled in: <b>C++</b>, <b>Java</b>, <b>Python</b>, <b>JavaScript</b>, <b>Node.js</b>, <b>React</b>, <b>Golang</b>, <b>C#</b>, <b>Flutter</b>, <b>TypeScript</b>, <b>MySQL</b>, <b>MongoDB</b>, <b>RabbitMQ</b>, <b>Firebase</b>, <b>Azure Functions</b>, and <b>OCR</b> technologies.
            `
          }}
        />
        <div className="flex flex-col sm:flex-row items-start gap-4 mt-6 max-w-screen-sm">
          <a href="mailto:ng3w.uv@gmail.com" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2 px-6 py-2 h-12">
              <Mail size={18} />
              Send an email
            </Button>
          </a>
          <a href="https://linkedin.com/in/chauhanyuv" target="_blank" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2 px-6 py-2 h-12">
              <Linkedin size={18} />
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/ng3w-uv" target="_blank" className="w-full sm:w-auto">
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
