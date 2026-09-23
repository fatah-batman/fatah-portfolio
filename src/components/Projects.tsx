import { projects } from '../data/portfolio';
import { ScrollReveal } from './ScrollReveal';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Selected Work</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A showcase of my recent engineering projects.
          </p>
        </div>
      </ScrollReveal>

      <div className={projects.length === 1 ? "max-w-xl mx-auto w-full" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.1} className="w-full">
            <div className="group flex flex-col bg-surface rounded-2xl overflow-hidden border border-subtle hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C15F3C]/10 h-full">
              {/* Project Image */}
              <div className="aspect-video overflow-hidden bg-surface-elevated relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl !== '#' && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform" aria-label="Live preview">
                      <FiExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl !== '#' && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform" aria-label="GitHub repository">
                      <FiGithub size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-secondary text-sm mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-subtle">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-surface-elevated text-primary rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
