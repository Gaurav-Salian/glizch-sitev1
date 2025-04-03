
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Glizch AI",
    category: "AI",
    description: "An intelligent virtual assistant powered by Gemini.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
    link: "https://ai.glizch.in",
  },
  {
    id: 2,
    title: "QR-Code Generator",
    category: "Web",
    description: "a niche tool that is used to generate different types of QR Codes. Depending on your purpose, you can use our generator to create QR Codes to open a website, view a PDF file, listen to music, watch Youtube videos, store image files, connect to a WiFi network, and much more.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
    link: "https://qr.glizch.in",
  },
  {
    id: 3,
    title: "Health Tracker",
    category: "Mobile",
    description: "Mobile app that monitors health metrics and provides personalized recommendations.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "Smart Home Dashboard",
    category: "Web",
    description: "Central control system for connected home devices with automation features.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 5,
    title: "Financial Analytics Tool",
    category: "Web",
    description: "Data visualization platform for financial insights and predictive modeling.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 6,
    title: "AR Navigation App",
    category: "Mobile",
    description: "Augmented reality application for intuitive real-world navigation.",
    image: "https://images.unsplash.com/photo-1632923057155-39041291d49f?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
];

const categories = ["All", "Web", "Mobile", "AI"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Projects</span></h2>
            <p className="text-muted-foreground text-lg">
              Check out some of my recent work across different domains and technologies.
            </p>
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  activeCategory === category
                    ? "bg-gradient-primary text-white"
                    : "bg-card hover:bg-primary/10"
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {filteredProjects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 0.1}>
                <motion.div
                  className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                      style={{
                        transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)"
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                    <a 
                      href={project.link}
                      className="text-primary font-medium hover:underline inline-flex items-center"
                    >
                      View Project
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
