import { Moon, Sun } from 'lucide-react';

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-sky-100 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        <a
          href="#home"
          className="text-xl font-serif font-bold text-sky-800 dark:text-sky-200"
        >
          Vishesh Gaur
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors">
            Home
          </a>

          <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors">
            About
          </a>

          <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors">
            Skills
          </a>

          <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors">
            Projects
          </a>

          <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors">
            Experience
          </a>

          <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors">
            Contact
          </a>
        </div>

        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full bg-sky-100 dark:bg-slate-700 text-sky-700 dark:text-sky-200 hover:scale-105 transition-transform"
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun size={19} /> : <Moon size={19} />}
        </button>

      </div>
    </nav>
  );
}