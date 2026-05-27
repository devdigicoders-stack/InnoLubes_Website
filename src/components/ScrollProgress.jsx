import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const containerRef = useRef(null);

  useEffect(() => {
    const dots = containerRef.current?.querySelectorAll('.scroll-dot');
    if (!dots) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      const total = dots.length;
      const filled = progress * total;

      dots.forEach((dot, i) => {
        const fill = Math.min(1, Math.max(0, filled - i));
        dot.style.transform = `scale(${0.5 + fill * 0.5})`;
        dot.style.opacity = `${0.2 + fill * 0.8}`;
        dot.style.background = fill > 0.5
          ? `linear-gradient(135deg, #d4a017, #f5d98a)`
          : 'rgba(212,160,23,0.3)';
        dot.style.boxShadow = fill > 0.8
          ? '0 0 6px rgba(212,160,23,0.7)'
          : 'none';
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        zIndex: 10000,
        pointerEvents: 'none',
      }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="scroll-dot"
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'rgba(212,160,23,0.3)',
            opacity: 0.2,
            transform: 'scale(0.5)',
            transition: 'transform 0.2s ease, opacity 0.2s ease, background 0.2s ease, box-shadow 0.2s ease',
          }}
        />
      ))}
    </div>
  );
}
