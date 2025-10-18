'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const update = () => setEnabled(mediaQuery.matches);

    update();
    mediaQuery.addEventListener('change', update);

    return () => {
      mediaQuery.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, [enabled]);

  return (
    <div
      ref={cursorRef}
      style={{ display: enabled ? 'block' : 'none' }}
      className="fixed w-4 h-4 border border-white/50 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
    />
  );
}
