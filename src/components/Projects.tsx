interface Project {
  id: string;
  title: string;
  desc: string;
  tech: string;
  image: string;
  github?: string;
  live?: string;
}

// Flag to enable/disable project details linking
const ENABLE_PROJECT_DETAILS = false;

const projects: Project[] = [
  {
    id: "health-manager-app",
    title: "Druv Health Manager App",
    desc: "Designed and developed Druv, a cross-platform health records app enabling secure digitization, storage, and UHI-based sharing of medical documents, aligned with India’s ABDM and ABHA standards.",
    tech: "Flutter · TypeScript · PaddleOCR · Firebase",
    image: "https://i.ibb.co/0RpT351w/Whats-App-Image-2025-05-17-at-23-32-43.jpg",
    github: "https://github.com/druvhealthtech/backend",
  },
  {
    id: "kumbh-mela-management",
    title: "Kumbh Mela Management",
    desc: "Developed a PHP-MySQL-based web solution for Kumbh Mela, enabling online pilgrim registration and backend-driven ghat/slot allocation to prevent overcrowding and include gender-sensitive features like Pink Ghats.",
    tech: "MySQL · PHP",
    image: "https://i.ibb.co/7NjqCPDB/Data-base-schema.jpg",
    github: "https://github.com/ng3w-uv/Kumbh-mela",
  }
];

import { Github } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-[image:var(--card-gradient)] rounded-xl shadow-md border border-gray-100 flex flex-col overflow-hidden min-w-[300px] max-w-sm w-full group hover:shadow-lg transition-all duration-300" tabIndex={0} aria-label={`Project: ${project.title}`}>
    {ENABLE_PROJECT_DETAILS ? (
      <Link to={`/projects/${project.id}`} className="block overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </Link>
    ) : (
      <div className="block overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    )}
    <div className="p-4 flex-1 flex flex-col">
      <div className="flex items-center gap-2 justify-between">
        {ENABLE_PROJECT_DETAILS ? (
          <Link to={`/projects/${project.id}`} className="font-semibold text-lg hover:text-primary transition-colors">
            {project.title}
          </Link>
        ) : (
          <div className="font-semibold text-lg">{project.title}</div>
        )}
        <div className="flex gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`} className="hover:scale-110 transition-transform">
              <Github size={18} className="text-muted hover:text-black" />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Live demo for ${project.title}`} className="hover:scale-110 transition-transform">
              <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M7 13.5L13.5 7M13.5 7H8M13.5 7V12.5" stroke="#8E9196" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-700 transition-colors">{project.desc}</p>
      <div className="mt-2 text-xs text-primary group-hover:text-blue-600 transition-colors">{project.tech}</div>
    </div>
  </div>
);

export default function Projects() {
  return (
    <section id="projects" className="mb-20 pt-8" tabIndex={-1} aria-label="Featured Projects">
      <div className="font-semibold text-muted uppercase tracking-wide text-sm mb-6 text-left">
        Featured Projects
      </div>
      <div className="grid md:grid-cols-2 gap-6 justify-center">
        {projects.map(project => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
