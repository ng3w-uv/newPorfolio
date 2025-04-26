interface Project {
  id: string;
  title: string;
  desc: string;
  tech: string;
  image: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: "intense-proxy",
    title: "IntenseProxy",
    desc: "Proxy provider website including authentication, dashboard and dynamic features",
    tech: "React · Bootstrap · Styled Components",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=IntenseProxy",
    github: "#",
    live: "#",
  },
  {
    id: "aape-coin",
    title: "$AAPE Coin",
    desc: "Site for a BSC based coin called $AAPE",
    tech: "Vue · Nuxt · Netlify",
    image: "https://placehold.co/600x400/7c3aed/ffffff?text=AAPE+Coin",
    github: "#",
    live: "#",
  },
  {
    id: "portfolio-v3",
    title: "Portfolio V3",
    desc: "Personal portfolio website with modern design and animations",
    tech: "React · TypeScript · Tailwind CSS",
    image: "https://placehold.co/600x400/059669/ffffff?text=Portfolio+V3",
    github: "#",
    live: "#",
  },
  {
    id: "task-manager",
    title: "Task Manager",
    desc: "A full-stack task management application with real-time updates",
    tech: "Next.js · Prisma · PostgreSQL",
    image: "https://placehold.co/600x400/d97706/ffffff?text=Task+Manager",
    github: "#",
    live: "#",
  }
];

import { Github } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-[image:var(--card-gradient)] rounded-xl shadow-md border border-gray-100 flex flex-col overflow-hidden min-w-[300px] max-w-sm w-full group hover:shadow-lg transition-all duration-300" tabIndex={0} aria-label={`Project: ${project.title}`}>
    <Link to={`/projects/${project.id}`} className="block overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </Link>
    <div className="p-4 flex-1 flex flex-col">
      <div className="flex items-center gap-2 justify-between">
        <Link to={`/projects/${project.id}`} className="font-semibold text-lg hover:text-primary transition-colors">
          {project.title}
        </Link>
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
