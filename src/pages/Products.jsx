import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Droplets, Zap, Shield, Phone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import {product1,product2,product3,product4,product5,product6,product7,
  hydraulicOil, gearOil, compressorOil, fluidGrease,
  frlOil, ap3Grease, textileOil, metalWorkingFluids
} from '../assets/images/index.js';

const products = [
   {
    img: product1,
    name: 'Hydraulic Oil',
    category: 'Oils',
    grade: 'ISO VG 32/46/68/100',
    desc: 'Ultra-refined hydraulic oils with premium anti-wear additive packages. Engineered for hydraulic systems operating under high pressure and variable temperatures.',
    applications: ['Hydraulic presses', 'CNC machinery', 'Industrial hydraulics', 'Mobile equipment', 'Marine systems'],
    benefits: ['Superior anti-wear protection', 'Excellent oxidation stability', 'Outstanding rust & corrosion control', 'Wide temperature range', 'High load-carrying capacity'],
    color: '#1a6ed4',
  },
  {
    img: product2,
    name: 'Gear Oil',
    category: 'Oils',
    grade: 'EP 68/100/150/220/320',
    desc: 'Extreme pressure gear lubricants fortified with advanced EP additives. Provides exceptional protection for heavy-duty industrial gearboxes and differential drives.',
    applications: ['Industrial gearboxes', 'Differential drives', 'Worm gears', 'Helical gears', 'Planetary gears'],
    benefits: ['Extreme pressure protection', 'Anti-scuffing performance', 'Thermal stability', 'Foam suppression', 'Long drain intervals'],
    color: '#d4801a',
  },
  {
    img: product3,
    name: 'Compressor Oil',
    category: 'Oils',
    grade: 'ISO VG 32/46/68/100/150',
    desc: 'Specially formulated compressor lubricants for rotary screw, reciprocating, centrifugal and rotary vane compressors. Delivers extended service life and minimal carbon deposits.',
    applications: ['Rotary screw compressors', 'Reciprocating compressors', 'Centrifugal compressors', 'Vacuum pumps', 'Air tools'],
    benefits: ['Minimal carbon formation', 'Excellent moisture separation', 'Superior oxidation resistance', 'Low volatility', 'Seal compatibility'],
    color: '#1ad496',
  },
  {
    img: product4,
    name: 'Fluid Grease',
    category: 'Greases',
    grade: 'NLGI 000/00/0',
    desc: 'Semi-fluid lithium complex greases ideal for centralized lubrication systems and enclosed gear drives requiring pumpable lubricants.',
    applications: ['Centralized lube systems', 'Enclosed gear units', 'Chassis lubrication', 'Agricultural equipment', 'Construction machinery'],
    benefits: ['Excellent pumpability', 'High mechanical stability', 'Good water resistance', 'Wide temperature service', 'Corrosion protection'],
    color: '#d4a017',
  },
  {
  img: product5,
  name: ' Automatic Transmission Fluid',
  category: ' Oils',
  grade: 'NLGI 000/00/0',
  desc: 'Premium quality Automatic Transmission Fluid specially formulated for forklifts, heavy-duty vehicles, industrial cranes, and enhanced thermal stability under demanding operating conditions.',
  applications: [
    'Forklifts',
    'Heavy commercial vehicles',
    'Industrial cranes',
    'Automatic transmissions',
    'Hydraulic power steering systems'
  ],
  benefits: [
    'Smooth and efficient gear shifting',
    'Excellent anti-wear protection',
    'Superior thermal and oxidation stability',
    'Reduces transmission component wear',
    'Protects against rust and corrosion',
    'Extended fluid service life',
    'Reliable performance under heavy loads'
  ],
  color: '#00B7B5'
},
{
  img: product6,
  name: 'Vacuum Oil',
  category: 'Industrial Oils',
  grade: 'ISO VG 100S',
  desc: 'High-performance vacuum pump oil formulated for rotary vane and industrial vacuum systems, ensuring efficient lubrication and stable vacuum performance.',
  applications: [
    'Rotary vane vacuum pumps',
    'Industrial vacuum systems',
    'Packaging machinery',
    'Laboratory equipment',
    'Process industries'
  ],
  benefits: [
    'Low volatility',
    'Excellent oxidation stability',
    'Enhanced pump efficiency',
    'Reduced wear and deposits',
    'Extended service life'
  ],
  color: '#0f9d58'
},
{
  img: product7,
  name: 'Vacuum Oil',
  category: 'Industrial Oils',
  grade: 'ISO VG 100S',
  desc: 'Premium vacuum pump lubricant designed to provide reliable sealing, lubrication, and protection in demanding vacuum applications.',
  applications: [
    'Vacuum pumps',
    'Vacuum packaging machines',
    'Industrial processing units',
    'Research laboratories',
    'Manufacturing equipment'
  ],
  benefits: [
    'Excellent thermal stability',
    'Superior lubrication performance',
    'Minimizes pump wear',
    'Reliable vacuum generation',
    'Long operational life'
  ],
  color: '#b71c1c'
},
  {
    img: hydraulicOil,
    name: 'Hydraulic Oil',
    category: 'Oils',
    grade: 'ISO VG 32/46/68/100',
    desc: 'Ultra-refined hydraulic oils with premium anti-wear additive packages. Engineered for hydraulic systems operating under high pressure and variable temperatures.',
    applications: ['Hydraulic presses', 'CNC machinery', 'Industrial hydraulics', 'Mobile equipment', 'Marine systems'],
    benefits: ['Superior anti-wear protection', 'Excellent oxidation stability', 'Outstanding rust & corrosion control', 'Wide temperature range', 'High load-carrying capacity'],
    color: '#1a6ed4',
  },
  {
    img: gearOil,
    name: 'Gear Oil',
    category: 'Oils',
    grade: 'EP 68/100/150/220/320',
    desc: 'Extreme pressure gear lubricants fortified with advanced EP additives. Provides exceptional protection for heavy-duty industrial gearboxes and differential drives.',
    applications: ['Industrial gearboxes', 'Differential drives', 'Worm gears', 'Helical gears', 'Planetary gears'],
    benefits: ['Extreme pressure protection', 'Anti-scuffing performance', 'Thermal stability', 'Foam suppression', 'Long drain intervals'],
    color: '#d4801a',
  },
  {
    img: compressorOil,
    name: 'Compressor Oil',
    category: 'Oils',
    grade: 'ISO VG 32/46/68/100/150',
    desc: 'Specially formulated compressor lubricants for rotary screw, reciprocating, centrifugal and rotary vane compressors. Delivers extended service life and minimal carbon deposits.',
    applications: ['Rotary screw compressors', 'Reciprocating compressors', 'Centrifugal compressors', 'Vacuum pumps', 'Air tools'],
    benefits: ['Minimal carbon formation', 'Excellent moisture separation', 'Superior oxidation resistance', 'Low volatility', 'Seal compatibility'],
    color: '#1ad496',
  },
  {
    img: fluidGrease,
    name: 'Fluid Grease',
    category: 'Greases',
    grade: 'NLGI 000/00/0',
    desc: 'Semi-fluid lithium complex greases ideal for centralized lubrication systems and enclosed gear drives requiring pumpable lubricants.',
    applications: ['Centralized lube systems', 'Enclosed gear units', 'Chassis lubrication', 'Agricultural equipment', 'Construction machinery'],
    benefits: ['Excellent pumpability', 'High mechanical stability', 'Good water resistance', 'Wide temperature service', 'Corrosion protection'],
    color: '#d4a017',
  },
  {
    img: frlOil,
    name: 'FRL Oil',
    category: 'Oils',
    grade: 'ISO VG 32/46',
    desc: 'Premium oil for Filter-Regulator-Lubricator units in pneumatic systems. Ensures smooth operation, zero foaming, and optimal air tool performance.',
    applications: ['Pneumatic tools', 'Air cylinders', 'Pneumatic motors', 'FRL units', 'Air logic controls'],
    benefits: ['Non-foaming formulation', 'Mist lubrication optimized', 'Excellent seal compatibility', 'Anti-rust additives', 'No residue buildup'],
    color: '#6b1ad4',
  },
  {
    img: ap3Grease,
    name: 'AP-3 Premium Grease',
    category: 'Greases',
    grade: 'NLGI Grade 3',
    desc: 'High-performance lithium-based multi-purpose grease. The industry standard for rolling and sliding bearings, chassis components and general-purpose applications.',
    applications: ['Rolling element bearings', 'Automotive chassis', 'Electrical motors', 'Industrial fans', 'Plain bearings'],
    benefits: ['Excellent shear stability', 'High-temperature resistance', 'Water washout resistance', 'Good adhesion', 'Corrosion inhibition'],
    color: '#d41a1a',
  },
  {
    img: textileOil,
    name: 'Textile Oil',
    category: 'Oils',
    grade: 'Specialty Grade',
    desc: 'Purpose-engineered lubricants for the textile industry. Formulated to provide smooth machine operation without contaminating yarn or fabric with stains or odors.',
    applications: ['Ring frames', 'Speed frames', 'Carding machines', 'Warping machines', 'Weaving looms'],
    benefits: ['Non-staining formulation', 'Odorless composition', 'High antioxidant stability', 'Low mist generation', 'Excellent fiber compatibility'],
    color: '#1ad4b8',
  },
  {
    img: metalWorkingFluids,
    name: 'Metal Working Fluids',
    category: 'Fluids',
    grade: 'Cutting / Grinding',
    desc: 'Advanced water-soluble and neat cutting fluids for machining, grinding, and forming operations. Maximizes tool life, improves surface finish, and removes heat efficiently.',
    applications: ['CNC turning/milling', 'Grinding operations', 'Deep hole drilling', 'Thread rolling', 'Sheet metal forming'],
    benefits: ['Extended tool life', 'Superior surface finish', 'Excellent cooling capacity', 'Biostable formulation', 'Tramp oil rejection'],
    color: '#1a9ed4',
  },
];

export default function Products() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [heroRef, heroVisible] = useScrollReveal(0.05);
  const [productsRef, productsVisible] = useScrollReveal(0.05);

  const filters = ['All', 'Oils', 'Greases', 'Fluids'];
  const filteredProducts =
    activeFilter === 'All'
      ? products
      : products.filter(p => p.category === activeFilter);

  const reveal = (v, d = 0) => ({
    opacity: v ? 1 : 0,
    transform: v ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.8s ease ${d}s, transform 0.8s ease ${d}s`,
  });

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setSelectedProduct(null); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProduct !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedProduct]);

  return (
    <main style={{ background: '#0a0a0a', paddingTop: '88px' }}>

      {/* Hero */}
      <section ref={heroRef} style={{ position: 'relative', height: '400px', overflow: 'hidden', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #0d1117, #111111)' }}>
        <div className="hex-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(212,160,23,0.08) 0%, transparent 60%)' }} />
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: `${Math.random() * 6 + 2}px`, height: `${Math.random() * 6 + 2}px`,
            borderRadius: '50%', background: `rgba(212,160,23,${Math.random() * 0.4 + 0.1})`,
            left: `${Math.random() * 100}%`,
            animation: `floatParticle ${Math.random() * 6 + 4}s linear infinite`,
            animationDelay: `${Math.random() * 6}s`,
          }} />
        ))}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1300px', margin: '0 auto', padding: '0 24px', ...reveal(heroVisible, 0) }}>
          <div className="section-tag" style={{ marginBottom: '16px' }}>Product Range</div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(3rem, 6vw, 5.5rem)', letterSpacing: '4px', lineHeight: 1 }}>
            PREMIUM <span className="gold-text">LUBRICANT</span> RANGE
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '16px', fontFamily: 'Outfit', maxWidth: '500px', lineHeight: 1.7 }}>
            8 specialized product categories. Hundreds of grades. One promise: unmatched industrial performance.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontFamily: 'Rajdhani', letterSpacing: '2px' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#d4a017' }}>Products</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={productsRef} style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px' }}>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '48px', flexWrap: 'wrap', ...reveal(productsVisible, 0) }}>
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                background: activeFilter === f ? 'linear-gradient(135deg, #d4a017, #b8860b)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${activeFilter === f ? 'transparent' : 'rgba(212,160,23,0.2)'}`,
                color: activeFilter === f ? '#0a0a0a' : 'rgba(255,255,255,0.6)',
                fontFamily: 'Rajdhani', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.78rem',
                padding: '10px 24px', cursor: 'pointer', transition: 'all 0.3s ease',
                clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
              }}>
                {f}
              </button>
            ))}
          </div>

          {/* Products */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
            {filteredProducts.map((p, i) => (
              <div
                key={i}
                className="product-card"
                style={{ ...reveal(productsVisible, i * 0.07), cursor: 'pointer' }}
                onClick={() => setSelectedProduct(products.indexOf(p))}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 50%)` }} />
                  <div style={{
                    position: 'absolute', top: '16px', right: '16px',
                    background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(212,160,23,0.4)',
                    padding: '4px 12px',
                    fontFamily: 'Rajdhani', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '2px',
                    color: '#d4a017',
                  }}>
                    {p.grade}
                  </div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                </div>

                {/* Content */}
                <div style={{ padding: '28px' }}>
                  <h3 style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px', color: '#f0f0f0' }}>
                    {p.name}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.87rem', lineHeight: 1.7, fontFamily: 'Outfit', marginBottom: '20px' }}>
                    {p.desc}
                  </p>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedProduct(products.indexOf(p)); }}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        color: '#d4a017', fontFamily: 'Rajdhani', fontWeight: 700,
                        fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase',
                        background: 'none', border: 'none', cursor: 'pointer',
                        transition: 'gap 0.3s',
                      }}
                    >
                      View Details <ArrowRight size={14} />
                    </button>
                    <Link to="/contact" style={{ marginLeft: 'auto' }} onClick={e => e.stopPropagation()}>
                      <button className="btn-gold" style={{ fontSize: '0.75rem', padding: '8px 18px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <Phone size={12} /> Enquire
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

           {/* ─── Product Modal ─── */}
      {selectedProduct !== null && (
        <div
          onClick={() => setSelectedProduct(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,0.88)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(6px)',
            animation: 'modalFadeIn 0.25s ease',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="product-modal-inner"
            style={{
              background: '#111111',
              border: '1px solid rgba(212,160,23,0.25)',
              maxWidth: '900px',
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              maxHeight: '70vh',
              overflow: 'hidden',
              position: 'relative',
              animation: 'modalSlideUp 0.3s ease',
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProduct(null)}
              style={{
                position: 'absolute', top: '16px', right: '16px', zIndex: 10,
                background: 'rgba(0,0,0,0.75)',
                border: '1px solid rgba(212,160,23,0.35)',
                color: '#d4a017',
                width: '36px', height: '36px',
                cursor: 'pointer', fontSize: '18px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Rajdhani', fontWeight: 700,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,160,23,0.15)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.75)'}
            >
              ✕
            </button>

            {/* Left — Full Product Image */}
            <div className="product-modal-image" style={{ position: 'relative', minHeight: '320px' }}>
              <img
                src={products[selectedProduct].img}
                alt={products[selectedProduct].name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              {/* Color accent bar at bottom */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${products[selectedProduct].color}, transparent)`,
              }} />
            </div>

            {/* Right — Product Data */}
            <div className="product-modal-content" style={{
              padding: '40px 32px 32px',
              overflowY: 'auto',
              maxHeight: '70vh',
            }}>
              {/* Grade badge */}
              <div style={{
                display: 'inline-block',
                background: 'rgba(212,160,23,0.08)',
                border: '1px solid rgba(212,160,23,0.3)',
                padding: '4px 12px',
                fontFamily: 'Rajdhani', fontWeight: 600,
                fontSize: '0.7rem', letterSpacing: '3px',
                color: '#d4a017', textTransform: 'uppercase',
                marginBottom: '14px',
              }}>
                {products[selectedProduct].grade}
              </div>

              {/* Product Name */}
              <h2 style={{
                fontFamily: 'Bebas Neue',
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                letterSpacing: '4px',
                color: '#f0f0f0',
                margin: '0 0 16px',
                lineHeight: 1.1,
              }}>
                {products[selectedProduct].name}
              </h2>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(212,160,23,0.15)', marginBottom: '20px' }} />

              {/* Description */}
              <p style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.87rem',
                lineHeight: 1.8,
                fontFamily: 'Outfit',
                marginBottom: '24px',
              }}>
                {products[selectedProduct].desc}
              </p>

              {/* Applications */}
              <div style={{ marginBottom: '22px' }}>
                <div style={{
                  fontFamily: 'Rajdhani', fontWeight: 700,
                  fontSize: '0.72rem', letterSpacing: '3px',
                  textTransform: 'uppercase', color: '#d4a017',
                  marginBottom: '10px',
                }}>Applications</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {products[selectedProduct].applications.map((a, j) => (
                    <span key={j} style={{
                      background: 'rgba(212,160,23,0.06)',
                      border: '1px solid rgba(212,160,23,0.15)',
                      padding: '4px 12px',
                      fontSize: '0.78rem',
                      color: 'rgba(255,255,255,0.55)',
                      fontFamily: 'Outfit',
                    }}>
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{
                  fontFamily: 'Rajdhani', fontWeight: 700,
                  fontSize: '0.72rem', letterSpacing: '3px',
                  textTransform: 'uppercase', color: '#d4a017',
                  marginBottom: '10px',
                }}>Key Benefits</div>
                {products[selectedProduct].benefits.map((b, j) => (
                  <div key={j} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    marginBottom: '8px',
                    color: 'rgba(255,255,255,0.55)',
                    fontFamily: 'Outfit', fontSize: '0.85rem',
                  }}>
                    <CheckCircle size={13} color="#d4a017" /> {b}
                  </div>
                ))}
              </div>

              {/* Enquire Button */}
              <Link to="/contact" onClick={() => setSelectedProduct(null)}>
                <button
                  className="btn-gold"
                  style={{
                    fontSize: '0.82rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Phone size={13} /> Enquire Now
                </button>
              </Link>
            </div>
          </div>

          {/* ── Responsive styles ── */}
          <style>{`
            /* Mobile: stack image on top, content below */
            @media (max-width: 650px) {
              .product-modal-inner {
                grid-template-columns: 1fr !important;
                grid-template-rows: auto 1fr;
                max-height: 92vh !important;
                overflow-y: auto !important;
              }

              .product-modal-image {
                min-height: 220px !important;
                max-height: 260px;
              }

              .product-modal-image img {
                height: 100% !important;
                max-height: 260px;
              }

              .product-modal-content {
                max-height: none !important;
                overflow-y: visible !important;
                padding: 24px 20px 28px !important;
              }
            }

            /* Small tablets */
            @media (min-width: 651px) and (max-width: 850px) {
              .product-modal-inner {
                grid-template-columns: 1fr !important;
                grid-template-rows: auto 1fr;
                max-height: 92vh !important;
                overflow-y: auto !important;
              }

              .product-modal-image {
                min-height: 280px !important;
                max-height: 300px;
              }

              .product-modal-content {
                max-height: none !important;
                overflow-y: visible !important;
              }
            }
          `}</style>
        </div>
      )}


      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, rgba(212,160,23,0.04) 0%, transparent 100%)', borderTop: '1px solid rgba(212,160,23,0.08)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <Droplets size={40} color="#d4a017" style={{ margin: '0 auto 20px' }} />
          <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '3px', marginBottom: '16px' }}>
            NEED A <span className="gold-text">CUSTOM FORMULATION?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '32px', fontFamily: 'Outfit' }}>
            Our R&D team can develop tailored lubricant formulations for your specific application requirements and operating conditions.
          </p>
          <Link to="/contact">
            <button className="btn-gold" style={{ fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              Discuss Custom Solutions <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { transform: translateY(30px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: repeat(auto-fill"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          div[style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
