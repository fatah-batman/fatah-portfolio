import { skills } from '../data/portfolio';
import { ScrollReveal } from './ScrollReveal';

export function Skills() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6 border-t border-subtle">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Capabilities</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold font-heading flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent inline-block"></span>
              Web Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.web.map(skill => (
                <span key={skill} className="px-4 py-2 bg-surface-elevated border border-subtle rounded-full text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold font-heading flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent inline-block"></span>
              Programming
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.programming.map(skill => (
                <span key={skill} className="px-4 py-2 bg-surface-elevated border border-subtle rounded-full text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold font-heading flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent inline-block"></span>
              Video / Motion
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.video.map(skill => (
                <span key={skill} className="px-4 py-2 bg-surface-elevated border border-subtle rounded-full text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
