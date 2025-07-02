'use client';

import React, { useEffect, useMemo, useState } from 'react';

export const TypingText = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const texts = useMemo(
    () => [
      'Desenvolvedor Full Stack',
      'Especialista em React & Vue',
      'Criador de Soluções Web',
      'Arquiteto de Experiências',
    ],
    []
  );

  useEffect(() => {
    const currentText = texts[currentIndex];
    if (displayText.length < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentIndex, texts]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="h-6 flex items-center justify-center" aria-live="polite">
      <h3 className="text-lg sm:text-2xl text-zinc-300 font-light">
        <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
          {displayText}
        </span>
        <span
          className={`inline-block w-1 h-8 bg-gradient-to-b from-teal-400 to-emerald-500 ml-2 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
      </h3>
    </div>
  );
};
