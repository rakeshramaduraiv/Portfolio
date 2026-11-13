import { useReveal } from '../hooks/useReveal';
import { skills } from '../data';

export default function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-pad bg-gray-900/40">
      <div ref={ref} className="reveal">
        <p className="section-sub">What I Know</p>
        <h2 id="skills-heading" className="section-title text-white">Skills</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {skills.map((s) => (
            <div key={s.group} className="card">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl" aria-hidden="true">{s.icon}</span>
                <h3 className="font-semibold text-white text-sm">{s.group}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item} className="badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
