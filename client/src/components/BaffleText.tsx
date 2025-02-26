import { useEffect, useRef } from "react";
import baffle from "baffle";

interface BaffleTextProps {
  text: string;
  revealDelay?: number;    // Delay before revealing the text (in ms)
  scrambleSpeed?: number;  // Scramble speed (in ms)
  className?: string;      // Optional additional CSS classes
}

export default function BaffleText({
  text,
  revealDelay = 1000,
  scrambleSpeed = 100,
  className,
}: BaffleTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      // Initialize baffle on the text element with the given options.
      const baffleText = baffle(textRef.current, {
        characters: "█▓▒░",         // Characters used for scrambling
        speed: scrambleSpeed,
        exclude: [" ", "!", "."],   // Do not scramble these characters
      });
      baffleText.start();

      // Reveal the actual text after the specified delay with a 2-second animation.
      setTimeout(() => {
        baffleText.reveal(2000);
      }, revealDelay);
    }
  }, [revealDelay, scrambleSpeed]);

  return (
    <h2
      ref={textRef}
      className={`text-2xl font-bold text-gray-800 text-center p-4 ${className ?? ""}`}
    >
      {text}
    </h2>
  );
} 