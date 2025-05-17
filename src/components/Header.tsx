
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-6">
      <div className="text-[32px] font-medium tracking-tighter font-walsheim">YC.</div>
      <nav className="hidden md:flex space-x-8 text-sm items-center">
        {links.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="text-gray-700 hover:text-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://drive.google.com/file/d/13HmVXwIVibTBoAd7JdyJlKlVDcfSb_RU/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-6"
        >
          <Button size="lg" className="bg-primary text-white font-medium px-7 py-2 text-base text-center rounded-lg shadow hover:bg-primary/80 transition-all">
            Resume
          </Button>
        </a>
      </nav>
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/ng3w-uv"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded hover:bg-accent/10"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/chauhanyuv"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded hover:bg-accent/10"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </header>
  );
}
