import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
    longDescription: "Built a full-featured e-commerce admin dashboard that allows store owners to manage products, orders, customers, and view real-time sales analytics. The dashboard features a responsive design, dark mode support, and interactive charts.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Redux"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: ["Real-time analytics dashboard", "Product management system", "Order tracking", "Customer insights", "Responsive design"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with drag-and-drop functionality.",
    longDescription: "Developed a modern task management application inspired by Trello and Notion. Features include drag-and-drop task organization, team collaboration, deadline tracking, and progress visualization.",
    techStack: ["React", "DnD Kit", "Zustand", "Tailwind CSS", "Firebase"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: ["Drag-and-drop interface", "Team collaboration", "Real-time updates", "Task prioritization", "Progress tracking"],
  },
  {
    id: 3,
    title: "Weather Application",
    description: "A beautiful weather app with location-based forecasts and animated visualizations.",
    longDescription: "Created an elegant weather application that provides accurate forecasts using multiple weather APIs. Features include location detection, 7-day forecasts, animated weather icons, and beautiful gradient backgrounds based on conditions.",
    techStack: ["React", "OpenWeather API", "Framer Motion", "CSS Modules"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: ["Location-based weather", "7-day forecast", "Animated visualizations", "Hourly updates", "Multiple units"],
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media metrics across multiple platforms.",
    longDescription: "Built a comprehensive social media analytics dashboard that aggregates data from multiple platforms. Users can track engagement metrics, follower growth, and content performance with beautiful visualizations.",
    techStack: ["React", "Next.js", "Chart.js", "Tailwind CSS", "REST APIs"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: ["Multi-platform analytics", "Engagement tracking", "Content scheduling", "Performance reports", "Trend analysis"],
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with modern design.",
    longDescription: "Designed and developed a modern, responsive portfolio website to showcase my work and skills. Features smooth animations, clean typography, and an intuitive navigation experience.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: ["Responsive design", "Smooth animations", "Contact form", "Project showcase", "Blog integration"],
  },
  {
    id: 6,
    title: "Recipe Finder App",
    description: "A recipe discovery app with advanced filtering and meal planning features.",
    longDescription: "Created a recipe discovery application that helps users find recipes based on ingredients, dietary restrictions, and cuisine preferences. Includes meal planning and shopping list generation.",
    techStack: ["React", "Spoonacular API", "Redux Toolkit", "Styled Components"],
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: ["Recipe search", "Dietary filters", "Meal planning", "Shopping lists", "Nutritional info"],
  },
];

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="group glass-card rounded-xl overflow-hidden hover-lift cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-2xl animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="relative h-64 md:h-80">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {project.title}
            </h2>
            <p className="text-muted-foreground">{project.longDescription}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full gradient-bg" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="hero" size="lg" className="w-full">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="hero-outline" size="lg" className="w-full">
                <Github className="w-4 h-4" />
                View Code
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A selection of my recent work. Click on any project to learn more.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
