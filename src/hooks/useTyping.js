import { useEffect, useState } from 'react';

export function useTyping(words, speed = 90, pause = 1400) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;
    if (!deleting && display === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display === '') {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setDisplay(deleting ? word.slice(0, display.length - 1) : word.slice(0, display.length + 1));
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [display, deleting, wordIdx, words, speed, pause]);

  return display;
}
