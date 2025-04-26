import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // This would typically fetch project details based on projectId
  const project = {
    id: projectId,
    title: "Sample Project",
    description: "Detailed project description goes here. This is a comprehensive overview of the project, its goals, and the problems it solves. The project demonstrates modern web development practices and showcases various technical skills.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    features: [
      "Responsive design with mobile-first approach",
      "Real-time data updates and synchronization",
      "Secure authentication and authorization",
      "Optimized performance and loading times",
      "Cross-browser compatibility"
    ],
    images: [
      "https://placehold.co/800x600/2563eb/ffffff?text=Project+Screenshot+1",
      "https://placehold.co/800x600/7c3aed/ffffff?text=Project+Screenshot+2",
      "https://placehold.co/800x600/059669/ffffff?text=Project+Screenshot+3",
      "https://placehold.co/800x600/d97706/ffffff?text=Project+Screenshot+4"
    ],
    githubLink: "https://github.com/yourusername/project",
    liveLink: "https://project-demo.com"
  };

  return (
    <div className="min-h-screen bg-[#fff]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {project.images.map((image, index) => (
              <div key={index} className="relative group cursor-pointer" onClick={() => setSelectedImage(image)}>
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="rounded-lg shadow-lg w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg" />
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            {project.githubLink && (
              <Button asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            )}
            {project.liveLink && (
              <Button variant="outline" asChild>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </article>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Project screenshot"
              className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
} 