import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ZoomIn } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import {
  exhibitionImg, teamMeetingImg, industrialDiscussionImg, manufacturingPlantImg,
  productDisplayImg, galleryShowcaseImg, corporateOfficeImg, factoryImg,
  warehouseImg, warehouseExtImg
} from '../assets/images/index.js';

const galleryItems = [
  { img: factoryImg, title: 'Factory Showcase', cat: 'Factory' },
  { img: exhibitionImg, title: 'Exhibition Showcase', cat: 'Events' },
  { img: productDisplayImg, title: 'Product Display Area', cat: 'Products' },
  { img: teamMeetingImg, title: 'Team Meeting', cat: 'Office' },
  { img: manufacturingPlantImg, title: 'Manufacturing Plant', cat: 'Factory' },
  { img: galleryShowcaseImg, title: 'Gallery Showcase', cat: 'Products' },
  { img: industrialDiscussionImg, title: 'Industrial Discussion', cat: 'Office' },
  { img: corporateOfficeImg, title: 'Corporate Office', cat: 'Office' },
  { img: warehouseImg, title: 'Warehouse Facility', cat: 'Logistics' },
  { img: warehouseExtImg, title: 'Warehouse Exterior', cat: 'Logistics' },
];

export default function Gallery() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [lightbox, setLightbox] = useState(null);
  const [filter, setFilter] = useState('All');
  const [heroRef, heroVisible] = useScrollReveal(0.05);
  const [gallRef, gallVisible] = useScrollReveal(0.05);

  const categories = ['All', 'Factory', 'Office', 'Products', 'Events', 'Logistics'];
  const filtered = filter === 'All' ? galleryItems : galleryItems.filter(g => g.cat === filter);

  const reveal = (v, d = 0) => ({
    opacity: v ? 1 : 0,
    transform: v ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.8s ease ${d}s, transform 0.8s ease ${d}s`,
  });

  // Keyboard support for lightbox
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight' && lightbox !== null) setLightbox(l => (l + 1) % filtered.length);
      if (e.key === 'ArrowLeft' && lightbox !== null) setLightbox(l => (l - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, filtered.length]);

  return (
    <main style={{ background: '#0a0a0a', paddingTop: '88px' }}>

      {/* Hero */}
      <section ref={heroRef} style={{ position: 'relative', height: '400px', overflow: 'hidden', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #0a0a12, #0d0d18)' }}>
        <div className="hex-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.7 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(212,160,23,0.07) 0%, transparent 60%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1300px', margin: '0 auto', padding: '0 24px', ...reveal(heroVisible, 0) }}>
          <div className="section-tag" style={{ marginBottom: '16px' }}>Gallery</div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(3rem, 6vw, 5.5rem)', letterSpacing: '4px', lineHeight: 1 }}>
            INSIDE <span className="gold-text">INNOLUBES</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '16px', fontFamily: 'Outfit', maxWidth: '500px', lineHeight: 1.7 }}>
            A visual journey through our factory, products, team, and industrial presence.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontFamily: 'Rajdhani', letterSpacing: '2px' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#d4a017' }}>Gallery</span>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section ref={gallRef} style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px' }}>

          {/* Filter */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '48px', flexWrap: 'wrap', ...reveal(gallVisible, 0) }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} style={{
                background: filter === cat ? 'linear-gradient(135deg, #d4a017, #b8860b)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${filter === cat ? 'transparent' : 'rgba(212,160,23,0.2)'}`,
                color: filter === cat ? '#0a0a0a' : 'rgba(255,255,255,0.6)',
                fontFamily: 'Rajdhani', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.78rem',
                padding: '10px 22px', cursor: 'pointer', transition: 'all 0.3s ease',
                clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
              }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div style={{ columns: '3', columnGap: '16px' }}>
            {filtered.map((item, i) => (
              <div
                key={item.img}
                onClick={() => setLightbox(i)}
                style={{
                  breakInside: 'avoid', marginBottom: '16px',
                  position: 'relative', overflow: 'hidden', cursor: 'zoom-in',
                  border: '1px solid rgba(212,160,23,0.08)',
                  opacity: gallVisible ? 1 : 0,
                  transform: gallVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
                  transition: `opacity 0.6s ease ${i * 0.06}s, transform 0.6s ease ${i * 0.06}s`,
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* Hover overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px',
                  opacity: 0, transition: 'opacity 0.3s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#f0f0f0' }}>{item.title}</span>
                    <ZoomIn size={18} color="#d4a017" />
                  </div>
                  <span style={{ fontFamily: 'Outfit', fontSize: '0.75rem', color: '#d4a017', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>{item.cat}</span>
                </div>
                {/* Top border on hover */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #d4a017, transparent)', transform: 'scaleX(0)', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scaleX(1)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scaleX(0)'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 1 }}
          >
            <X size={20} />
          </button>

          {/* Prev / Next */}
          {['←', '→'].map((arrow, dir) => (
            <button key={arrow} onClick={(e) => { e.stopPropagation(); setLightbox(l => dir === 0 ? (l - 1 + filtered.length) % filtered.length : (l + 1) % filtered.length); }} style={{
              position: 'absolute', [dir === 0 ? 'left' : 'right']: '20px',
              background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.3)',
              color: '#d4a017', width: '48px', height: '48px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', fontFamily: 'serif', fontSize: '1.2rem',
              transition: 'all 0.3s',
            }}>
              {arrow}
            </button>
          ))}

          {/* Image */}
          <img
            src={filtered[lightbox].img}
            alt={filtered[lightbox].title}
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', border: '1px solid rgba(212,160,23,0.2)', boxShadow: '0 0 80px rgba(0,0,0,0.8)' }}
          />

          {/* Caption */}
          <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'white' }}>{filtered[lightbox].title}</div>
            <div style={{ fontFamily: 'Outfit', fontSize: '0.75rem', color: '#d4a017', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '4px' }}>{filtered[lightbox].cat}</div>
            <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', marginTop: '8px', fontFamily: 'Outfit' }}>
              {lightbox + 1} / {filtered.length} — Use arrow keys to navigate
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          div[style*="columns: 3"] { columns: 2 !important; }
        }
        @media (max-width: 480px) {
          div[style*="columns: 2"] { columns: 1 !important; }
        }
      `}</style>
    </main>
  );
}
