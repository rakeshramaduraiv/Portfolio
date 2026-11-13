import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { meta } from '../data';

export default function Contact() {
  const ref = useReveal();
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xzerzwdo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'sent' : 'error');
      if (res.ok) setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputCls = 'w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all';

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-pad bg-gray-900/40">
      <div ref={ref} className="reveal">
        <p className="section-sub">Get In Touch</p>
        <h2 id="contact-heading" className="section-title text-white">Contact</h2>

        <div className="grid md:grid-cols-2 gap-10 mt-8">
          {/* Info */}
          <div className="flex flex-col gap-5">
            <p className="text-gray-400 text-sm leading-relaxed">
              I'm actively looking for Data Analyst / Data Science / ML roles. Feel free to reach out — I'd love to connect!
            </p>
            {[
              { label: 'Email', value: meta.email, href: `mailto:${meta.email}`, icon: '✉️' },
              { label: 'LinkedIn', value: 'rakesh-ramadurai', href: meta.linkedin, icon: '💼' },
              { label: 'GitHub', value: 'rakeshramaduraiv', href: meta.github, icon: '🐙' },
              { label: 'LeetCode', value: 'RakeshRamadurai', href: meta.leetcode, icon: '🧩' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center gap-3 group no-underline"
                aria-label={`${item.label}: ${item.value}`}
              >
                <span className="text-xl" aria-hidden="true">{item.icon}</span>
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-sm text-white group-hover:text-teal-400 transition-colors">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4" aria-label="Contact form">
            <div>
              <label htmlFor="name" className="block text-xs text-gray-400 mb-1.5 font-medium">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className={inputCls}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-gray-400 mb-1.5 font-medium">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className={inputCls}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs text-gray-400 mb-1.5 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your message..."
                value={form.message}
                onChange={handleChange}
                className={`${inputCls} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending…' : status === 'sent' ? '✓ Message Sent!' : 'Send Message'}
            </button>

            {status === 'error' && (
              <p role="alert" className="text-red-400 text-xs text-center">Something went wrong. Please try again or email directly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
