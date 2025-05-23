import { Mail, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/13HmVXwIVibTBoAd7JdyJlKlVDcfSb_RU/view?usp=sharing', '_blank');
  };

  return (
    <section id="contact" className="mb-20 pt-8 border-t border-gray-200" tabIndex={-1} aria-label="Contact Section">
      <div className="font-semibold text-muted uppercase tracking-wide text-sm mb-6 text-left font-walsheim">
        Contact
      </div>
      <div className="flex flex-col gap-3 sm:flex-row items-start sm:items-center font-walsheim">
        <a
          href="mailto:ng3w.uv@gmail.com"
          className="flex items-center gap-2 text-gray-700 hover:text-primary text-base transition-colors"
          aria-label="Email ng3w.uv@gmail.com"
        >
          <Mail size={20} /> ng3w.uv@gmail.com
        </a>
        <span className="hidden sm:inline-block mx-4 text-gray-400">|</span>
        <a
          href="https://linkedin.com/in/chauhanyuv"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-primary text-base transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} /> LinkedIn
        </a>
        <span className="hidden sm:inline-block mx-4 text-gray-400">|</span>
        <a
          href="https://github.com/ng3w-uv"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-primary text-base transition-colors"
          aria-label="Github"
        >
          <Github size={20} /> Github
        </a>
      </div>
      <div className="mt-8 flex items-center gap-2">
        <a
          href="https://drive.google.com/file/d/13HmVXwIVibTBoAd7JdyJlKlVDcfSb_RU/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-primary text-base transition-colors font-walsheim"
        >
          <Download size={20} />
          Download Resume
        </a>
      </div>
    </section>
  );
}
