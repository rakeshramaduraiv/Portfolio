import { useReveal } from '../hooks/useReveal';
import { about } from '../data';

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" aria-labelledby="about-heading" className="section-pad">
      <div ref={ref} className="reveal">
        <p className="section-sub">Who I Am</p>
        <h2 id="about-heading" className="section-title text-white dark:text-white">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10 mt-8 items-start">
          <p className="text-gray-400 leading-relaxed text-base">{about.bio}</p>

          <div className="flex flex-col gap-4">
            {about.facts.map((f) => (
              <div key={f.label} className="card flex items-start gap-4">
                <span className="text-2xl" aria-hidden="true">{f.icon}</span>
                <div>
                  <p className="font-semibold text-white text-sm">{f.label}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
