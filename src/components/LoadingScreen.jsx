import { useEffect, useState } from 'react';
import { logo } from '../assets/images/index.js';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        background: 'radial-gradient(ellipse at center, #111111 0%, #0a0a0a 70%, #000000 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      {/* Animated background rings */}
      {[1, 2, 3].map(i => (
        <div key={i} style={{
          position: 'absolute', borderRadius: '50%',
          border: `1px solid rgba(212,160,23,${0.15 / i})`,
          width: `${200 + i * 120}px`, height: `${200 + i * 120}px`,
          animation: `spin ${4 + i * 2}s linear infinite`,
        }} />
      ))}

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes logoFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes textReveal { from { opacity: 0; letter-spacing: 20px; } to { opacity: 1; letter-spacing: 5px; } }
      `}</style>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Logo */}
        <div style={{ animation: 'logoFloat 3s ease-in-out infinite', marginBottom: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={logo} alt="INNOLUBES" style={{
            height: '80px', objectFit: 'contain',
            filter: 'drop-shadow(0 0 30px rgba(212,160,23,0.6))',
          }} />
        </div>

        {/* Brand text */}
        <div style={{
          fontFamily: 'Bebas Neue, cursive',
          fontSize: '3.5rem',
          letterSpacing: '10px',
          background: 'linear-gradient(135deg, #d4a017 0%, #f5d98a 50%, #b8860b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'textReveal 1.5s ease-out forwards',
          marginBottom: '8px',
        }}>
          INNOLUBES
        </div>

        <div style={{
          fontFamily: 'Rajdhani, sans-serif',
          fontSize: '0.75rem',
          letterSpacing: '6px',
          color: 'rgba(255,255,255,0.4)',
          textTransform: 'uppercase',
          marginBottom: '48px',
        }}>
          Premium Industrial Lubricants
        </div>

        {/* Progress bar */}
        <div style={{
          width: '300px', height: '2px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '1px', overflow: 'hidden', position: 'relative',
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #d4a017, #f5d98a, #d4a017)',
            backgroundSize: '200% 100%',
            animation: 'shimmerLoad 1.5s linear infinite',
            transition: 'width 0.1s ease',
            boxShadow: '0 0 15px rgba(212,160,23,0.8)',
          }} />
        </div>

        <div style={{
          fontFamily: 'Rajdhani, sans-serif',
          fontSize: '0.7rem',
          letterSpacing: '4px',
          color: 'rgba(212,160,23,0.6)',
          marginTop: '16px',
        }}>
          {progress}% LOADING
        </div>
      </div>

      {/* Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          borderRadius: '50%',
          background: 'rgba(212,160,23,0.6)',
          left: `${Math.random() * 100}%`,
          animation: `floatParticle ${Math.random() * 4 + 4}s linear infinite`,
          animationDelay: `${Math.random() * 4}s`,
        }} />
      ))}
    </div>
  );
}
