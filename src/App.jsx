import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Menu } from 'lucide-react';

const App = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-inter">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white">
            <span className="text-teal-300">močitagent</span> dev
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a
              href="#projects"
              className="rounded-lg bg-teal-400 text-slate-950 font-semibold px-3 py-2 hover:bg-teal-300 transition"
            >
              Hire Me
            </a>
          </nav>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 bg-slate-950/80">
            <div className="container mx-auto px-6 py-3 flex flex-col gap-3 text-sm text-white/80">
              <a href="#skills" onClick={() => setOpen(false)} className="hover:text-white">Skills</a>
              <a href="#projects" onClick={() => setOpen(false)} className="hover:text-white">Projects</a>
              <a href="#contact" onClick={() => setOpen(false)} className="hover:text-white">Contact</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
