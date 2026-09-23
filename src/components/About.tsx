import { aboutData } from '../data/portfolio';
import { ScrollReveal } from './ScrollReveal';

export function About() {
  return (
    <section id="about" className="py-24 bg-surface-elevated/30">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-12 text-center">About Me</h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2} className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-48 h-48 shrink-0 rounded-full overflow-hidden border-4 border-surface shadow-xl">
            {/* TODO: Replace with real photo */}
            <img 
              src={aboutData.photoUrl} 
              alt="Mohammed Fatahuddin" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-lg text-secondary leading-relaxed space-y-4">
            <p>{aboutData.bio}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
