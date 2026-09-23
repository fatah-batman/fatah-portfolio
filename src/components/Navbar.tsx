import { useTheme } from '../hooks/useTheme';
import { features } from '../data/portfolio';
import { FiSun, FiMoon } from 'react-icons/fi';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-subtle transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold font-heading tracking-tighter">
          MF.
        </a>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            {features.showVideoWork && (
              <a href="#video" className="hover:text-accent transition-colors">Video Work</a>
            )}
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-surface-elevated transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
