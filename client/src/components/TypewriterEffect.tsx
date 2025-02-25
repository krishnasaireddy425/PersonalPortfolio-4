import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypewriterEffectProps {
  phrases: string[];
  className?: string;
}

export default function TypewriterEffect({ phrases, className = "" }: TypewriterEffectProps) {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: phrases,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [phrases]);

  return (
    <span className={className}>
      <span ref={el} />
    </span>
  );
}