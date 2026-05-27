import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      if (barRef.current) {
        barRef.current.style.width = `${progress}%`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, height: '3px', zIndex: 10000, pointerEvents: 'none', width: '100%', background: 'rgba(0,0,0,0.3)' }}>
      <div ref={barRef} style={{
        height: '100%', width: '0%',
        background: 'linear-gradient(90deg, #d4a017, #f5d98a, #d4a017)',
        boxShadow: '0 0 10px rgba(212,160,23,0.8)',
        transition: 'width 0.1s ease',
      }} />
    </div>
  );
}
