import { useReveal } from '../hooks/useReveal';
import { certifications } from '../data';

export default function Certifications() {
  const ref = useReveal();
  return (
    <section id="certifications" aria-labelledby="cert-heading" className="section-pad">
      <div ref={ref} className="reveal">
        <p className="section-sub">Credentials</p>
        <h2 id="cert-heading" className="section-title text-white">Certifications</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {certifications.map((c) => (
            <div key={c.title} className="card flex gap-4 items-start">
              <span className="text-3xl shrink-0" aria-hidden="true">{c.icon}</span>
              <div>
                <h3 className="font-semibold text-white text-sm leading-snug">{c.title}</h3>
                <p className="text-teal-400 text-xs font-medium mt-1">{c.issuer}</p>
                <p className="text-gray-500 text-xs mt-0.5">{c.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
