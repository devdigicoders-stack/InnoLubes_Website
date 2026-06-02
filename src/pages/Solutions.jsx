import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Cpu, Wrench, Layers, CheckCircle, Phone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { manufacturingPlantImg, factoryImg, industrialImg3 } from '../assets/images/index.js';

export default function Solutions() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [heroRef, heroVisible] = useScrollReveal(0.05);
  const [s1Ref, s1Visible] = useScrollReveal(0.1);
  const [s2Ref, s2Visible] = useScrollReveal(0.1);
  const [s3Ref, s3Visible] = useScrollReveal(0.1);
  const [s4Ref, s4Visible] = useScrollReveal(0.1);

  const reveal = (v, d = 0) => ({
    opacity: v ? 1 : 0,
    transform: v ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.8s ease ${d}s, transform 0.8s ease ${d}s`,
  });

  const sectors = [
    'Automotive Manufacturing', 'Textile Industry', 'Steel & Metals', 'Cement Plants',
    'Power Generation', 'Earthmoving Equipment', 'Paper & Pulp', 'Pharmaceutical',
    'Food Processing', 'Chemical Industry', 'Marine Applications', 'Mining Operations',
  ];

  return (
    <main style={{ background: '#0a0a0a', paddingTop: '88px' }}>

      {/* Hero */}
      <section ref={heroRef} style={{ position: 'relative', height: '480px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: '-10%', backgroundImage: `url(${manufacturingPlantImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 100%)' }} />
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1300px', margin: '0 auto', padding: '0 24px', ...reveal(heroVisible, 0) }}>
          <div className="section-tag" style={{ marginBottom: '16px' }}>Industrial Solutions</div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(3rem, 6vw, 5.5rem)', letterSpacing: '4px', lineHeight: 1 }}>
            INDUSTRIAL <span className="gold-text">LUBRICATION</span> SOLUTIONS
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '16px', fontFamily: 'Outfit', maxWidth: '500px', lineHeight: 1.7 }}>
            End-to-end lubrication solutions tailored for every industrial sector and application.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontFamily: 'Rajdhani', letterSpacing: '2px' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#d4a017' }}>Solutions</span>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section ref={s1Ref} style={{ padding: '100px 0', background: '#080808' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px', ...reveal(s1Visible, 0) }}>
            <div className="section-tag" style={{ marginBottom: '12px' }}>What We Offer</div>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', letterSpacing: '3px' }}>
              COMPREHENSIVE <span className="gold-text">INDUSTRIAL</span> SERVICES
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', ...reveal(s1Visible, 0.1) }}>
            {[
              {
                icon: Cpu,
                title: 'OEM Solutions',
                desc: 'Approved lubricant programs developed in partnership with leading OEMs. Our products meet the exact specifications demanded by machinery manufacturers for warranty-compliant lubrication.',
                points: ['OEM-approved formulations', 'Specification compliance', 'Application mapping', 'Technical documentation'],
              },
              {
                icon: Settings,
                title: 'Industrial Lubrication Services',
                desc: 'Comprehensive lubrication audits, lube schedule optimization, and ongoing technical support for your entire plant. We analyze your equipment and recommend the ideal lubricant for every application.',
                points: ['Plant lubrication audit', 'Schedule optimization', 'Consumption analysis', 'On-site technical support'],
              },
              {
                icon: Wrench,
                title: 'Manufacturing Support',
                desc: 'Dedicated lubrication programs for manufacturing operations with focus on maximizing uptime, minimizing unplanned maintenance, and reducing total lubrication costs.',
                points: ['Predictive maintenance', 'Oil analysis programs', 'Contamination control', 'Cost reduction strategy'],
              },
              {
                icon: Layers,
                title: 'Customized Formulations',
                desc: 'Our in-house R&D team develops bespoke lubricant formulations tailored to your specific machinery, operating environment, and performance requirements.',
                points: ['Custom base oil selection', 'Additive optimization', 'Lab testing & validation', 'Batch consistency'],
              },
            ].map((s, i) => (
              <div key={i} style={{
                background: 'linear-gradient(145deg, rgba(15,15,25,0.95), rgba(10,10,15,0.98))',
                border: '1px solid rgba(212,160,23,0.12)',
                padding: '36px 28px',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.4)'; e.currentTarget.style.transform = 'translateY(-6px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.12)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ width: '52px', height: '52px', border: '1px solid rgba(212,160,23,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', background: 'rgba(212,160,23,0.05)' }}>
                  <s.icon size={24} color="#d4a017" />
                </div>
                <h3 style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.87rem', lineHeight: 1.7, fontFamily: 'Outfit', marginBottom: '20px' }}>{s.desc}</p>
                <div style={{ borderTop: '1px solid rgba(212,160,23,0.12)', paddingTop: '20px' }}>
                  {s.points.map((p, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'rgba(255,255,255,0.55)', fontFamily: 'Outfit', fontSize: '0.85rem' }}>
                      <CheckCircle size={13} color="#d4a017" /> {p}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Banner */}
      <section ref={s2Ref} style={{ position: 'relative', height: '520px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: '-10%', backgroundImage: `url(${factoryImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.8) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1300px', margin: '0 auto', padding: '0 24px', ...reveal(s2Visible, 0) }}>
          <div style={{ maxWidth: '580px' }}>
            <div className="section-tag" style={{ marginBottom: '16px' }}>Manufacturing Excellence</div>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', letterSpacing: '3px', lineHeight: 1.05, marginBottom: '20px' }}>
              PRECISION MANUFACTURING FOR <span className="gold-text">PEAK PERFORMANCE</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '32px', fontFamily: 'Outfit' }}>
              Every INNOLUBES product is manufactured under strict ISO 9001:2015 quality standards, ensuring consistent performance batch after batch. Our advanced blending technology delivers precise viscosity control and additive dispersion.
            </p>
            <div style={{ display: 'flex', gap: '40px' }}>
              {[{ num: '3,000 MT', label: 'Annual Capacity' }, { num: '99.8%', label: 'Quality Pass Rate' }, { num: '48hr', label: 'Dispatch Time' }].map(({ num, label }) => (
                <div key={label}>
                  <div style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', letterSpacing: '2px' }} className="gold-text">{num}</div>
                  <div style={{ fontFamily: 'Rajdhani', fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section ref={s3Ref} style={{ padding: '100px 0', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px', ...reveal(s3Visible, 0) }}>
            <div className="section-tag" style={{ marginBottom: '12px' }}>Industries Served</div>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', letterSpacing: '3px' }}>
              LUBRICATING <span className="gold-text">EVERY INDUSTRY</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '540px', margin: '20px auto 0', fontFamily: 'Outfit', lineHeight: 1.8 }}>
              INNOLUBES serves 50+ industrial sectors across India with specialized lubrication solutions.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px', ...reveal(s3Visible, 0.1) }}>
            {sectors.map((sector, i) => (
              <div key={i} className="stat-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '8px', height: '8px', background: '#d4a017', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Rajdhani', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '1px', color: 'rgba(255,255,255,0.7)' }}>{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={s4Ref} style={{ padding: '100px 0', background: '#080808' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px', ...reveal(s4Visible, 0) }}>
            <div className="section-tag" style={{ marginBottom: '12px' }}>Our Process</div>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', letterSpacing: '3px' }}>
              HOW WE <span className="gold-text">WORK WITH YOU</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0', ...reveal(s4Visible, 0.1) }}>
            {[
              { step: '01', title: 'Consultation', desc: 'Our technical team understands your machinery, operating conditions and challenges.' },
              { step: '02', title: 'Analysis', desc: 'We analyze your current lubrication program and identify improvement opportunities.' },
              { step: '03', title: 'Solution Design', desc: 'Custom lubricant selection or formulation designed specifically for your needs.' },
              { step: '04', title: 'Implementation', desc: 'Product supply with full implementation support and team training.' },
              { step: '05', title: 'Monitoring', desc: 'Ongoing oil analysis and performance tracking for continuous optimization.' },
            ].map((p, i) => (
              <div key={i} style={{ padding: '36px 28px', border: '1px solid rgba(212,160,23,0.08)', borderLeft: i > 0 ? 'none' : '1px solid rgba(212,160,23,0.08)', position: 'relative' }}>
                <div style={{ fontFamily: 'Bebas Neue', fontSize: '3.5rem', letterSpacing: '2px', color: 'rgba(212,160,23,0.1)', lineHeight: 1, marginBottom: '16px' }}>{p.step}</div>
                <h3 style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '1rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#d4a017', marginBottom: '12px' }}>{p.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.87rem', lineHeight: 1.7, fontFamily: 'Outfit' }}>{p.desc}</p>
                {i < 4 && (
                  <div style={{ position: 'absolute', right: '-12px', top: '50%', transform: 'translateY(-50%)', zIndex: 1, background: '#080808', padding: '4px' }} className="hidden-mobile">
                    <ArrowRight size={16} color="rgba(212,160,23,0.4)" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, rgba(212,160,23,0.04) 0%, transparent 100%)', borderTop: '1px solid rgba(212,160,23,0.08)', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '3px', marginBottom: '16px' }}>
            START YOUR <span className="gold-text">LUBRICATION JOURNEY</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '32px', fontFamily: 'Outfit' }}>
            Contact our expert team today for a free lubrication audit and consultation.
          </p>
          <Link to="/contact">
            <button className="btn-gold" style={{ fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={16} /> Contact Our Experts
            </button>
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .hidden-mobile { display: none !important; } }
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: repeat(5"] { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  );
}
