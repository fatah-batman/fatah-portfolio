import { socialLinks } from '../data/portfolio';
import { ScrollReveal } from './ScrollReveal';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface-elevated/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">Let's work together.</h2>
          <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities, my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href={socialLinks.email}
              className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-[#C15F3C]/25 flex items-center justify-center gap-2"
            >
              <FiMail size={20} />
              Say Hello
            </a>
            
            <a 
              href={socialLinks.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-surface-elevated hover:bg-surface border border-subtle text-primary font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FiDownload size={20} />
              Download Resume
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="p-4 bg-surface rounded-full border border-subtle hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1" aria-label="GitHub">
              <FiGithub size={24} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-surface rounded-full border border-subtle hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1" aria-label="LinkedIn">
              <FiLinkedin size={24} />
            </a>
            <a href={socialLinks.email} className="p-4 bg-surface rounded-full border border-subtle hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1" aria-label="Email">
              <FiMail size={24} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
