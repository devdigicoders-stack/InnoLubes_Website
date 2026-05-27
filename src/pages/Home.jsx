import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown, ArrowRight, Award, Shield, Zap, Globe,
  Factory, Droplets, Settings, Star, CheckCircle, Phone
} from 'lucide-react';
import { useScrollReveal, useCounter } from '../hooks/useScrollReveal.js';
import {
  factoryImg, warehouseImg, warehouseExtImg, productDisplayImg,
  galleryShowcaseImg, trustedClientsImg, industrialDiscussionImg,
  manufacturingPlantImg, hydraulicOil, gearOil, compressorOil,
  fluidGrease, frlOil, ap3Grease, textileOil, metalWorkingFluids, logo
} from '../assets/images/index.js';

// Animated counter component
function StatCounter({ value, suffix = '', label, icon: Icon, start }) {
  const count = useCounter(value, 2000, start);
  return (
    <div className="stat-card" style={{ padding: '32px 24px', textAlign: 'center', flex: 1 }}>
      <div style={{ width: '52px', height: '52px', border: '1px solid rgba(212,160,23,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', background: 'rgba(212,160,23,0.05)' }}>
        <Icon size={22} color="#d4a017" />
      </div>
      <div style={{ fontFamily: 'Bebas Neue', fontSize: '3rem', lineHeight: 1, letterSpacing: '2px', marginBottom: '8px' }}>
        <span className="gold-text">{count}{suffix}</span>
      </div>
      <div style={{ fontFamily: 'Rajdhani', fontSize: '0.78rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
        {label}
      </div>
    </div>
  );
}

const products = [
  { img: hydraulicOil, name: 'Hydraulic Oil', desc: 'High-performance hydraulic oils for precision machinery and demanding hydraulic systems.' },
  { img: gearOil, name: 'Gear Oil', desc: 'Superior gear protection with extreme pressure additives for industrial gearboxes.' },
  { img: compressorOil, name: 'Compressor Oil', desc: 'Specially formulated for rotary screw, reciprocating and centrifugal compressors.' },
  { img: ap3Grease, name: 'AP-3 Premium Grease', desc: 'Multi-purpose lithium grease for bearings, chassis and general lubrication.' },
];

export default function Home({ onInquiry }) {
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const [statsRef, statsVisible] = useScrollReveal(0.2);
  const [introRef, introVisible] = useScrollReveal(0.15);
  const [productsRef, productsVisible] = useScrollReveal(0.1);
  const [factoryRef, factoryVisible] = useScrollReveal(0.1);
  const [warehouseRef, warehouseVisible] = useScrollReveal(0.1);
  const [clientRef, clientVisible] = useScrollReveal(0.15);
  const [galleryRef, galleryVisible] = useScrollReveal(0.1);
  const [ctaRef, ctaVisible] = useScrollReveal(0.15);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setParallaxY(window.scrollY * 0.4);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const reveal = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <main style={{ background: '#0a0a0a' }}>

      {/* ========== HERO ========== */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '700px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        {/* Parallax background */}
        <div style={{
          position: 'absolute', inset: '-10%',
          backgroundImage: `url(${factoryImg})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          transform: `translateY(${parallaxY * 0.5}px)`,
          transition: 'transform 0.1s linear',
        }} />

        {/* Dark overlays */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.88) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(212,160,23,0.08) 0%, transparent 60%)' }} />

        {/* Grid pattern */}
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

        {/* Animated particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: `${Math.random() * 4 + 1}px`, height: `${Math.random() * 4 + 1}px`,
            borderRadius: '50%',
            background: `rgba(212,160,23,${Math.random() * 0.5 + 0.2})`,
            left: `${Math.random() * 100}%`,
            animation: `floatParticle ${Math.random() * 6 + 6}s linear infinite`,
            animationDelay: `${Math.random() * 8}s`,
          }} />
        ))}

        {/* Hero Content */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1300px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <div style={{ maxWidth: '760px' }}>
            {/* Tag */}
            <div style={{
              ...reveal(heroVisible, 0.1),
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              marginBottom: '24px',
              background: 'rgba(212,160,23,0.08)',
              border: '1px solid rgba(212,160,23,0.25)',
              padding: '8px 20px',
            }}>

            </div>

            {/* Main heading */}
            <h1 style={{
              ...reveal(heroVisible, 0.2),
              fontFamily: 'Bebas Neue', fontSize: 'clamp(4rem, 9vw, 8rem)',
              lineHeight: 0.95, letterSpacing: '4px', marginBottom: '24px',
            }}>
              <span style={{ display: 'block', color: 'white' }}>ENGINEERED</span>
              <span style={{ display: 'block' }} className="animated-gold">FOR EXCELLENCE</span>
              <span style={{ display: 'block', color: 'white' }}>IN MOTION</span>
            </h1>

            <p style={{
              ...reveal(heroVisible, 0.35),
              fontFamily: 'Outfit', fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.8, maxWidth: '540px', marginBottom: '40px',
            }}>
              INNOLUBES delivers ultra-premium industrial lubricants trusted by leading manufacturers worldwide — formulated for peak performance, maximum equipment life and zero-compromise reliability.
            </p>

            <div style={{ ...reveal(heroVisible, 0.5), display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/products">
                <button className="btn-gold" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                  <Droplets size={16} /> Explore Products
                </button>
              </Link>
              <button className="btn-outline-gold" onClick={onInquiry} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                <Phone size={16} /> Get Free Quote
              </button>
            </div>
          </div>

          {/* Floating stats chips */}
          <div style={{
            ...reveal(heroVisible, 0.7),
            position: 'absolute', right: '24px', top: '50%', transform: 'translateY(-50%)',
            display: 'flex', flexDirection: 'column', gap: '12px',
          }} className="hidden-mobile">
            {[
              { value: '500+', label: 'Products' },
              { value: '25+', label: 'Years Exp.' },
              { value: '1000+', label: 'Clients' },
              { value: 'ISO', label: 'Certified' },
            ].map((s, i) => (
              <div key={i} className="glass-dark" style={{ padding: '16px 20px', textAlign: 'center', minWidth: '100px' }}>
                <div style={{ fontFamily: 'Bebas Neue', fontSize: '1.6rem', letterSpacing: '2px' }} className="gold-text">{s.value}</div>
                <div style={{ fontFamily: 'Rajdhani', fontSize: '0.68rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', animation: 'float 3s ease-in-out infinite' }}>
          <span style={{ fontFamily: 'Rajdhani', fontSize: '0.65rem', letterSpacing: '4px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Scroll</span>
          <ChevronDown size={20} color="rgba(212,160,23,0.6)" />
        </div>
      </section>

      {/* ========== COMPANY INTRO ========== */}
      <section ref={introRef} style={{ padding: '100px 0', background: '#080808', position: 'relative', overflow: 'hidden' }}>
        <div className="hex-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            {/* Left: Image */}
            <div style={{ ...reveal(introVisible, 0), position: 'relative' }}>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={industrialDiscussionImg} alt="Industrial Discussion" style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(212,160,23,0.1) 0%, transparent 60%)' }} />
              </div>
              {/* Gold frame accent */}
              <div style={{ position: 'absolute', top: '-16px', left: '-16px', right: '16px', bottom: '16px', border: '1px solid rgba(212,160,23,0.2)', pointerEvents: 'none', zIndex: -1 }} />
              {/* Experience badge */}
              <div style={{
                position: 'absolute', bottom: '-24px', right: '-24px',
                background: 'linear-gradient(135deg, #d4a017, #b8860b)',
                padding: '24px 28px', textAlign: 'center',
                boxShadow: '0 10px 40px rgba(212,160,23,0.4)',
              }}>
                <div style={{ fontFamily: 'Bebas Neue', fontSize: '2.8rem', color: '#0a0a0a', lineHeight: 1 }}>25+</div>
                <div style={{ fontFamily: 'Rajdhani', fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(0,0,0,0.7)' }}>Years of<br />Excellence</div>
              </div>
            </div>

            {/* Right: Content */}
            <div style={{ ...reveal(introVisible, 0.2) }}>
              <div className="section-tag" style={{ marginBottom: '12px' }}>About INNOLUBES</div>
              <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2.8rem, 4vw, 4rem)', letterSpacing: '3px', lineHeight: 1.05, marginBottom: '24px' }}>
                LUBRICANTS THAT <span className="gold-text">POWER INDUSTRY</span>
              </h2>
              <div className="industrial-line" />
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, marginBottom: '20px', fontFamily: 'Outfit', fontSize: '0.95rem' }}>
                For over two decades, INNOLUBES has been at the forefront of industrial lubrication technology. We engineer precision lubricants that protect critical machinery, optimize performance, and reduce operational costs across diverse industrial sectors.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.9, marginBottom: '36px', fontFamily: 'Outfit', fontSize: '0.95rem' }}>
                From automotive manufacturing to textile mills, from heavy earthmoving to precision engineering — INNOLUBES products deliver unmatched protection where it matters most.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '36px' }}>
                {['ISO 9001:2015 Certified', 'BIS Approved', 'OEM Partnerships', 'Pan-India Distribution'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.6)', fontFamily: 'Outfit', fontSize: '0.9rem' }}>
                    <CheckCircle size={15} color="#d4a017" /> {item}
                  </div>
                ))}
              </div>
              <Link to="/about">
                <button className="btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                  Our Story <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section ref={statsRef} style={{ padding: '60px 0', background: 'linear-gradient(135deg, rgba(212,160,23,0.04) 0%, rgba(0,0,0,0) 100%)', borderTop: '1px solid rgba(212,160,23,0.08)', borderBottom: '1px solid rgba(212,160,23,0.08)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', gap: '2px', flexWrap: 'wrap' }}>
            <StatCounter value={25} suffix="+" label="Years Experience" icon={Award} start={statsVisible} />
            <StatCounter value={500} suffix="+" label="Product Variants" icon={Droplets} start={statsVisible} />
            <StatCounter value={1000} suffix="+" label="Happy Clients" icon={Star} start={statsVisible} />
            <StatCounter value={50} suffix="+" label="Industry Sectors" icon={Factory} start={statsVisible} />
            <StatCounter value={15} suffix="+" label="States Covered" icon={Globe} start={statsVisible} />
          </div>
        </div>
      </section>

      {/* ========== PRODUCTS PREVIEW ========== */}
      <section ref={productsRef} style={{ padding: '100px 0', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px', ...reveal(productsVisible, 0) }}>
            <div className="section-tag" style={{ marginBottom: '12px' }}>Our Product Range</div>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', letterSpacing: '3px', marginBottom: '16px' }}>
              PRECISION <span className="gold-text">ENGINEERED</span> LUBRICANTS
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '580px', margin: '0 auto', fontFamily: 'Outfit', lineHeight: 1.8 }}>
              Every INNOLUBES product is formulated with cutting-edge additive technology to meet the toughest industrial demands.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            {products.map((p, i) => (
              <div key={i} className="product-card" style={{ ...reveal(productsVisible, i * 0.1) }}>
                <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
                  <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#f0f0f0', marginBottom: '10px' }}>
                    {p.name}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem', lineHeight: 1.7, fontFamily: 'Outfit', marginBottom: '20px' }}>{p.desc}</p>
                  <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#d4a017', fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', transition: 'gap 0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.gap = '14px'}
                    onMouseLeave={e => e.currentTarget.style.gap = '8px'}
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', ...reveal(productsVisible, 0.5) }}>
            <Link to="/products">
              <button className="btn-outline-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                View All Products <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(180deg, #080808, #0d0d1a)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', left: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,160,23,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="section-tag" style={{ marginBottom: '12px' }}>Why INNOLUBES</div>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', letterSpacing: '3px' }}>
              THE <span className="gold-text">INNOLUBES</span> ADVANTAGE
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { icon: Shield, title: 'Proven Protection', desc: 'Advanced additive packages ensure maximum equipment protection even under extreme pressure and temperature.' },
              { icon: Zap, title: 'Peak Performance', desc: 'Precision-engineered viscosity profiles deliver optimal lubrication at every operating condition.' },
              { icon: Award, title: 'ISO Certified', desc: 'ISO 9001:2015 certified manufacturing with stringent quality controls at every production stage.' },
              { icon: Settings, title: 'Custom Solutions', desc: 'Tailored formulations developed specifically for your application, machinery and operating environment.' },
              { icon: Globe, title: 'Wide Distribution', desc: 'Pan-India distribution network ensuring timely delivery and local technical support across all regions.' },
              { icon: Factory, title: 'OEM Approved', desc: 'Approved and recommended by leading OEMs for use in their flagship machinery and equipment.' },
            ].map((item, i) => (
              <div key={i} className="glass" style={{
                padding: '32px 24px',
                border: '1px solid rgba(212,160,23,0.1)',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.4)'; e.currentTarget.style.background = 'rgba(212,160,23,0.04)'; e.currentTarget.style.transform = 'translateY(-6px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ width: '48px', height: '48px', border: '1px solid rgba(212,160,23,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', background: 'rgba(212,160,23,0.05)' }}>
                  <item.icon size={22} color="#d4a017" />
                </div>
                <h3 style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem', lineHeight: 1.7, fontFamily: 'Outfit' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FACTORY SHOWCASE ========== */}
      <section ref={factoryRef} style={{ position: 'relative', height: '600px', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: '-10%',
          backgroundImage: `url(${factoryImg})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          transform: factoryVisible ? 'scale(1)' : 'scale(1.1)',
          transition: 'transform 1.5s cubic-bezier(0.25,0.46,0.45,0.94)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.8) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center', maxWidth: '1300px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '560px', ...reveal(factoryVisible, 0) }}>
            <div className="section-tag" style={{ marginBottom: '16px' }}>Our Factory</div>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', letterSpacing: '3px', lineHeight: 1.05, marginBottom: '20px' }}>
              STATE-OF-THE-ART <span className="gold-text">MANUFACTURING</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '32px', fontFamily: 'Outfit', fontSize: '0.95rem' }}>
              Our modern manufacturing facility is equipped with advanced blending technology, automated filling lines, and rigorous quality testing labs — ensuring every batch meets the highest industry standards.
            </p>
            <Link to="/solutions">
              <button className="btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                Our Capabilities <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== WAREHOUSE & LOGISTICS ========== */}
      <section ref={warehouseRef} style={{ padding: '100px 0', background: '#080808' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px', ...reveal(warehouseVisible, 0) }}>
            <div className="section-tag" style={{ marginBottom: '12px' }}>Warehouse & Logistics</div>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', letterSpacing: '3px' }}>
              SEAMLESS <span className="gold-text">SUPPLY CHAIN</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {[
              { img: factoryImg, title: 'Modern Warehousing', desc: 'Large-scale storage facilities with optimal temperature and humidity control to preserve product integrity.' },
              { img: warehouseExtImg, title: 'Pan-India Logistics', desc: 'Reliable distribution infrastructure ensuring timely delivery across all major industrial hubs in India.' },
            ].map((item, i) => (
              <div key={i} style={{ position: 'relative', overflow: 'hidden', ...reveal(warehouseVisible, i * 0.15) }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease', objectFit: 'contain' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px' }}>
                  <h3 style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.6, fontFamily: 'Outfit' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CLIENT TRUST ========== */}
      <section ref={clientRef} style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: '-10%',
          backgroundImage: `url(${trustedClientsImg})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.88)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1300px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div style={{ ...reveal(clientVisible, 0) }}>
            <div className="section-tag" style={{ marginBottom: '12px' }}>Client Trust</div>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', letterSpacing: '3px', marginBottom: '16px' }}>
              TRUSTED BY INDUSTRY <span className="gold-text">LEADERS</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '540px', margin: '0 auto 56px', fontFamily: 'Outfit', lineHeight: 1.8 }}>
              Over 1,000 industrial clients across India rely on INNOLUBES for their critical lubrication requirements.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', ...reveal(clientVisible, 0.2) }}>
            {['Automotive', 'Textile', 'Steel & Mining', 'Power Generation', 'Food Processing', 'Cement', 'Paper Mills', 'Pharmaceuticals'].map((sector, i) => (
              <div key={i} className="glass-dark" style={{ padding: '12px 24px', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.5)'; e.currentTarget.style.background = 'rgba(212,160,23,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.15)'; e.currentTarget.style.background = 'rgba(0,0,0,0.5)'; }}
              >
                <span style={{ fontFamily: 'Rajdhani', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)' }}>{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GALLERY PREVIEW ========== */}
      <section ref={galleryRef} style={{ padding: '100px 0', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '24px', ...reveal(galleryVisible, 0) }}>
            <div>
              <div className="section-tag" style={{ marginBottom: '12px' }}>Gallery</div>
              <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', letterSpacing: '3px' }}>
                INSIDE <span className="gold-text">INNOLUBES</span>
              </h2>
            </div>
            <Link to="/gallery">
              <button className="btn-outline-gold" style={{ fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                View All <ArrowRight size={14} />
              </button>
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '260px 260px', gap: '16px', ...reveal(galleryVisible, 0.1) }}>
            {[
              { img: productDisplayImg, style: { gridRow: '1 / 3' } },
              { img: galleryShowcaseImg, style: {} },
              { img: manufacturingPlantImg, style: {} },
              { img: warehouseImg, style: {} },
              { img: factoryImg, style: {} },
            ].map((item, i) => (
              <div key={i} style={{ position: 'relative', overflow: 'hidden', ...item.style }}>
                <img src={item.img} alt={`Gallery ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0)', transition: 'background 0.3s ease' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,160,23,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0)'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section ref={ctaRef} style={{ padding: '100px 0', background: 'linear-gradient(135deg, #0d1117 0%, #111111 50%, #0a0a0a 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(212,160,23,0.06) 0%, transparent 70%)' }} />
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '0 24px', ...reveal(ctaVisible, 0) }}>
          <div className="section-tag" style={{ marginBottom: '16px' }}>Ready to Upgrade?</div>
          <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '4px', lineHeight: 1.05, marginBottom: '20px' }}>
            PROTECT YOUR MACHINERY WITH <span className="gold-text">INNOLUBES</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '40px', fontFamily: 'Outfit', fontSize: '1rem' }}>
            Join thousands of industrial clients who have made the switch to INNOLUBES premium lubricants. Contact our expert team today for a customized lubrication solution.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-gold" onClick={onInquiry} style={{ fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={16} /> Get Free Consultation
            </button>
            <Link to="/products">
              <button className="btn-outline-gold" style={{ fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <Droplets size={16} /> Browse Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes glowPulse { 0%,100% { opacity:1; box-shadow:0 0 6px rgba(212,160,23,0.5); } 50% { opacity:0.5; box-shadow:0 0 20px rgba(212,160,23,1); } }
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
        }
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          section > div > div[style*="grid-template-columns: 2fr 1fr 1fr"] { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; }
        }
      `}</style>
    </main>
  );
}
