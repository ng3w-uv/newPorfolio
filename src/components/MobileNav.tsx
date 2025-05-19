import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/13HmVXwIVibTBoAd7JdyJlKlVDcfSb_RU/view?usp=sharing', '_blank');
    setIsOpen(false);
  };

  return (
    <div className="md:hidden fixed bottom-6 right-6 z-50">
      <Button
        variant="outline"
        size="icon"
        className="w-12 h-12 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 w-48 space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/13HmVXwIVibTBoAd7JdyJlKlVDcfSb_RU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <Download size={16} />
            Resume
          </a>
        </div>
      )}
    </div>
  );
} 