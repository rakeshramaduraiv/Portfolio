import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { projects, otherProjects } from '../data';

const TABS = ['All', 'ML', 'MLOps', 'Research', 'Web'];

function ProjectCard({ p }) {
  return (
    <article className="card flex flex-col gap-3 h-full">
      <div className="flex flex-wrap gap-2 items-center">
        {p.tags.map((t) => (
          <span key={t} className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${t === 'Featured' ? 'bg-teal-500 text-gray-950' : 'badge'}`}>
            {t}
          </span>
        ))}
      </div>
      <h3 className="font-bold text-white text-sm leading-snug">{p.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1">{p.desc}</p>
      <div className="flex flex-wrap gap-1.5 mt-1">
        {p.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-400 border border-gray-700">{t}</span>
        ))}
      </div>
      {(p.github || p.demo) && (
        <div className="flex gap-2 mt-2">
          {p.github && (
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs px-3 py-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs px-3 py-1.5">
              Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  const [active, setActive] = useState('All');
  const ref = useReveal();

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(active));

  const otherFiltered = active === 'All' || active === 'Web' ? otherProjects : [];

  return (
    <section id="projects" aria-labelledby="proj-heading" className="section-pad bg-gray-900/40">
      <div ref={ref} className="reveal">
        <p className="section-sub">What I've Built</p>
        <h2 id="proj-heading" className="section-title text-white">Projects</h2>

        {/* Filter tabs */}
        <div role="tablist" aria-label="Project filter" className="flex flex-wrap gap-2 mt-6 mb-8">
          {TABS.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={active === t}
              onClick={() => setActive(t)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                active === t
                  ? 'bg-teal-500 text-gray-950'
                  : 'border border-gray-700 text-gray-400 hover:border-teal-500/50 hover:text-teal-400'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Main project cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>

        {/* Other projects */}
        {otherFiltered.length > 0 && (
          <div className="mt-10">
            <h3 className="text-white font-semibold text-base mb-4">Other Projects</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherFiltered.map((p) => (
                <a
                  key={p.title}
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center justify-between gap-3 group no-underline"
                  aria-label={`${p.title} on GitHub`}
                >
                  <div>
                    <p className="text-white text-sm font-medium group-hover:text-teal-400 transition-colors">{p.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{p.tech}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-teal-400 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
