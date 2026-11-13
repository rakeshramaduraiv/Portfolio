import { useReveal } from '../hooks/useReveal';
import { experience } from '../data';

export default function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" aria-labelledby="exp-heading" className="section-pad">
      <div ref={ref} className="reveal">
        <p className="section-sub">Work History</p>
        <h2 id="exp-heading" className="section-title text-white">Experience</h2>

        <div className="relative mt-10 pl-6 border-l-2 border-teal-500/30 flex flex-col gap-10">
          {experience.map((e, i) => (
            <div key={i} className="relative">
              {/* Timeline dot */}
              <span
                aria-hidden="true"
                className="absolute -left-[1.65rem] top-1 w-4 h-4 rounded-full bg-teal-500 border-4 border-gray-950 shadow-lg shadow-teal-500/30"
              />
              <div className="card ml-2">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-white text-base">{e.role}</h3>
                    <p className="text-teal-400 text-sm font-medium">{e.company} · {e.location}</p>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">{e.period}</span>
                </div>
                <ul className="space-y-1.5">
                  {e.points.map((pt, j) => (
                    <li key={j} className="text-gray-400 text-sm flex gap-2">
                      <span className="text-teal-500 mt-0.5 shrink-0" aria-hidden="true">▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
