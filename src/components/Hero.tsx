import { siteConfig } from '../data/portfolio';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Subtle background gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C15F3C]/15 via-transparent to-transparent opacity-50 dark:opacity-20 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          {/* Hero image with subtle border and smooth hover */}
          <div className="relative aspect-[3/4] max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden bg-surface-elevated border border-subtle shadow-2xl group">
            <img 
              src={siteConfig.heroPhoto} 
              alt={siteConfig.name}
              className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none opacity-60" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="order-1 md:order-2 flex flex-col gap-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-tight tracking-tight">
            Hi, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C15F3C] to-[#E07A5F]">
              {siteConfig.name.split(' ')[0]}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-lg">
            {siteConfig.tagline}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-[#C15F3C]/25"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-surface-elevated hover:bg-surface border border-subtle text-primary font-medium rounded-lg transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
