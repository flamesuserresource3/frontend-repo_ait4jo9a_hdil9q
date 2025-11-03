import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignette to improve text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/30 to-slate-950/80" />

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="backdrop-blur-[1px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 shadow-sm">
            <Rocket className="h-4 w-4 text-teal-300" />
            Building for močitagent systems
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Hi, I’m <span className="text-teal-300">a Frontend/Backend Developer</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-xl">
            I craft modern, interactive, and reliable web applications — from slick user interfaces to robust APIs. Let’s bring bold ideas to life.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-teal-400 text-slate-950 font-semibold px-5 py-3 hover:bg-teal-300 transition shadow-lg shadow-teal-500/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition"
            >
              Get in Touch
            </a>
            <div className="ml-2 flex items-center gap-3">
              <a
                href="https://github.com/"
                aria-label="GitHub"
                className="rounded-full border border-white/15 bg-white/5 p-2 hover:bg-white/10 transition"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                className="rounded-full border border-white/15 bg-white/5 p-2 hover:bg-white/10 transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  );
};

export default Hero;
