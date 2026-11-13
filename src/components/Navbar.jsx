import { useEffect, useState } from 'react';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Coding', 'Education', 'Contact'];

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-800/60 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-teal-400 font-bold text-xl tracking-tight focus:outline-none focus:ring-2 focus:ring-teal-400 rounded"
          aria-label="Back to top"
        >
          RR<span className="text-gray-400">.</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => navTo(l === 'Coding' ? 'coding' : l.toLowerCase())}
                className="px-3 py-1.5 text-sm text-gray-300 hover:text-teal-400 transition-colors rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark/light mode"
            className="p-2 rounded-lg text-gray-400 hover:text-teal-400 hover:bg-gray-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
              </svg>
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-teal-400 hover:bg-gray-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur border-b border-gray-800 px-4 pb-4">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => navTo(l === 'Coding' ? 'coding' : l.toLowerCase())}
              className="block w-full text-left py-2.5 text-sm text-gray-300 hover:text-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 rounded"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
