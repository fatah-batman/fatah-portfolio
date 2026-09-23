import { siteConfig } from '../data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-subtle">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-secondary text-sm">
          &copy; {currentYear} {siteConfig.name}. All rights reserved.
        </p>
        
        <p className="text-secondary text-sm flex items-center gap-1">
          Built with <span className="text-accent">♥</span> using React & Tailwind
        </p>
      </div>
    </footer>
  );
}
