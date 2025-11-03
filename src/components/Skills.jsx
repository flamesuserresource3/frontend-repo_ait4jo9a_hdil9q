import React from 'react';
import { Code2, Database, Server, Sparkles } from 'lucide-react';

const skills = [
  {
    title: 'Frontend',
    icon: Code2,
    items: ['React + Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix UI'],
    color: 'from-teal-500/20 to-cyan-500/10',
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['FastAPI', 'Node/Express', 'REST & Webhooks', 'Auth & JWT'],
    color: 'from-violet-500/20 to-fuchsia-500/10',
  },
  {
    title: 'Data & Infra',
    icon: Database,
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'Docker'],
    color: 'from-amber-500/20 to-rose-500/10',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-slate-950 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="h-5 w-5 text-teal-300" />
          <h2 className="text-2xl md:text-3xl font-bold">What I Work With</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map(({ title, icon: Icon, items, color }) => (
            <div
              key={title}
              className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 backdrop-blur-md bg-gradient-to-br ${color}`}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-2">
                  <Icon className="h-5 w-5 text-teal-200" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-white/80">
                {items.map((item) => (
                  <li key={item} className="leading-relaxed">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
