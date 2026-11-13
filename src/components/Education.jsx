import { useReveal } from '../hooks/useReveal';
import { education } from '../data';

export default function Education() {
  const ref = useReveal();
  return (
    <section id="education" aria-labelledby="edu-heading" className="section-pad">
      <div ref={ref} className="reveal">
        <p className="section-sub">Academic Background</p>
        <h2 id="edu-heading" className="section-title text-white">Education</h2>

        <div className="relative mt-10 pl-6 border-l-2 border-teal-500/30 flex flex-col gap-8">
          {education.map((e, i) => (
            <div key={i} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[1.65rem] top-1 w-4 h-4 rounded-full bg-teal-500 border-4 border-gray-950 shadow-lg shadow-teal-500/30"
              />
              <div className="card ml-2">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-white text-sm">{e.degree}</h3>
                    <p className="text-teal-400 text-sm font-medium mt-0.5">{e.institution} · {e.location}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">{e.year}</span>
                    {e.status && <p className="text-xs text-teal-400 mt-1">{e.status}</p>}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-2 font-medium">{e.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
