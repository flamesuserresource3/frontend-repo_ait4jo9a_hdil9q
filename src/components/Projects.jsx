import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Dashboard',
    desc: 'Interactive analytics with live data streams and custom charts.',
    tags: ['React', 'WebSockets', 'Tailwind'],
    href: '#',
    repo: '#',
    accent: 'from-teal-500/20 to-cyan-500/10',
  },
  {
    title: 'Headless Commerce API',
    desc: 'FastAPI service powering a multi-tenant storefront with JWT auth.',
    tags: ['FastAPI', 'MongoDB', 'Auth'],
    href: '#',
    repo: '#',
    accent: 'from-violet-500/20 to-fuchsia-500/10',
  },
  {
    title: '3D Playground',
    desc: 'Playful 3D interactions embedded with Spline and custom controls.',
    tags: ['Spline', 'Three-ish', 'UX'],
    href: '#',
    repo: '#',
    accent: 'from-amber-500/20 to-rose-500/10',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Selected Work</h2>
          <a href="#contact" className="text-teal-300 hover:text-teal-200 transition">Let’s collaborate →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 backdrop-blur-md bg-gradient-to-br ${p.accent}`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={p.repo}
                    aria-label="Repository"
                    className="rounded-lg bg-white/10 p-2 hover:bg-white/15"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={p.href}
                    className="rounded-lg bg-teal-400 text-slate-950 p-2 hover:bg-teal-300"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="mt-3 text-white/80 min-h-[60px]">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
