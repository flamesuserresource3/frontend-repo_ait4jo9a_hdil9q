import React from 'react';
import { Send, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 text-white py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="flex items-center gap-2 mb-6">
          <Mail className="h-5 w-5 text-teal-300" />
          <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 backdrop-blur-md">
          <p className="text-white/80">
            Have a project in mind or want to talk močitagent systems? I’m open to freelance work, collaborations, and consulting.
          </p>

          <form
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const subject = encodeURIComponent(`Portfolio inquiry: ${data.get('name')}`);
              const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`);
              window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
            }}
          >
            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400/60"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400/60"
            />
            <textarea
              name="message"
              required
              placeholder="Tell me about your idea..."
              rows={5}
              className="md:col-span-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400/60"
            />
            <button
              type="submit"
              className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-teal-400 text-slate-950 font-semibold px-5 py-3 hover:bg-teal-300 transition"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
          </form>
        </div>

        <p className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} — Built with care and curiosity.</p>
      </div>
    </section>
  );
};

export default Contact;
