import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Award, Users, Factory, Globe, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import {
  exhibitionImg, teamMeetingImg, industrialDiscussionImg,
  manufacturingPlantImg, corporateOfficeImg, factoryImg
} from '../assets/images/index.js';

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [heroRef, heroVisible] = useScrollReveal(0.05);
  const [storyRef, storyVisible] = useScrollReveal(0.1);
  const [visionRef, visionVisible] = useScrollReveal(0.1);
  const [mfgRef, mfgVisible] = useScrollReveal(0.1);
  const [cultureRef, cultureVisible] = useScrollReveal(0.1);
  const [exhibRef, exhibVisible] = useScrollReveal(0.1);

  const reveal = (v, d = 0) => ({
    opacity: v ? 1 : 0,
    transform: v ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.8s ease ${d}s, transform 0.8s ease ${d}s`,
  });

  return (
    <main style={{ background: '#0a0a0a', paddingTop: '88px' }}>

      {/* Hero Banner */}
      <section ref={heroRef} style={{ position: 'relative', height: '480px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: '-10%', backgroundImage: `url(${corporateOfficeImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 100%)' }} />
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1300px', margin: '0 auto', padding: '0 24px', ...reveal(heroVisible, 0) }}>
          <div className="section-tag" style={{ marginBottom: '16px' }}>About Us</div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(3rem, 6vw, 5.5rem)', letterSpacing: '4px', lineHeight: 1 }}>
            THE STORY OF <span className="gold-text">INNOLUBES</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontFamily: 'Rajdhani', letterSpacing: '2px' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#d4a017' }}>About</span>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section ref={storyRef} style={{ padding: '100px 0', background: '#080808' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div style={{ ...reveal(storyVisible, 0) }}>
              <div className="section-tag" style={{ marginBottom: '12px' }}>Our Story</div>
              <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', letterSpacing: '3px', marginBottom: '24px' }}>
                10+ YEARS OF <span className="gold-text">LUBRICATION</span> EXCELLENCE
              </h2>
              <div className="industrial-line" />
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, marginBottom: '20px', fontFamily: 'Outfit' }}>
                Founded with a passion for industrial excellence, INNOLUBES began as a small specialty lubricant manufacturer serving local industries. Over a decade, we have grown into a nationally recognized brand trusted by over 500 industrial clients across India.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.9, marginBottom: '36px', fontFamily: 'Outfit' }}>
                Our journey has been defined by relentless innovation, unwavering quality commitment, and a deep understanding of industrial lubrication challenges. From our state-of-the-art manufacturing plant to our nationwide distribution network, every aspect of INNOLUBES reflects our commitment to industrial excellence.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {[
                  { year: '2022', event: 'Company Founded' },
                  { year: '2023', event: 'ISO 9001 Certified' },
                  { year: '2025', event: 'National Expansion' },
                  { year: '2026', event: '500+ Clients' },
                ].map(({ year, event }) => (
                  <div key={year} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ fontFamily: 'Bebas Neue', fontSize: '1.6rem', letterSpacing: '2px', color: '#d4a017', flexShrink: 0 }}>{year}</div>
                    <div style={{ width: '1px', height: '32px', background: 'rgba(212,160,23,0.3)' }} />
                    <div style={{ fontFamily: 'Outfit', fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)' }}>{event}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative', ...reveal(storyVisible, 0.2) }}>
              <img src={industrialDiscussionImg} alt="Company Overview" style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', top: '-16px', right: '-16px', left: '16px', bottom: '16px', border: '1px solid rgba(212,160,23,0.2)', zIndex: -1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section ref={visionRef} style={{ padding: '100px 0', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(212,160,23,0.04) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px', ...reveal(visionVisible, 0) }}>
            <div className="section-tag" style={{ marginBottom: '12px' }}>Our Direction</div>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', letterSpacing: '3px' }}>
              VISION & <span className="gold-text">MISSION</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', ...reveal(visionVisible, 0.1) }}>
            {[
              {
                icon: Eye,
                title: 'Our Vision',
                content: 'To be India\'s most trusted premium lubricant brand — synonymous with cutting-edge technology, uncompromising quality, and industrial reliability. We envision a future where every INNOLUBES product sets the benchmark for lubrication excellence in its category.',
                color: '#d4a017',
              },
              {
                icon: Target,
                title: 'Our Mission',
                content: 'To develop and deliver innovative lubrication solutions that maximize equipment performance, reduce maintenance costs, and extend machinery life for industrial clients across India. We are committed to sustainable manufacturing, continuous R&D, and building long-term partnerships.',
                color: '#d4a017',
              },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'linear-gradient(145deg, rgba(15,15,25,0.95), rgba(10,10,15,0.98))',
                border: '1px solid rgba(212,160,23,0.15)',
                padding: '48px 40px',
              }}>
                <div style={{ width: '60px', height: '60px', border: '1px solid rgba(212,160,23,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', background: 'rgba(212,160,23,0.05)' }}>
                  <item.icon size={26} color={item.color} />
                </div>
                <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '1.8rem', letterSpacing: '3px', marginBottom: '16px', color: item.color }}>{item.title}</h3>
                <div style={{ height: '2px', width: '40px', background: `linear-gradient(90deg, ${item.color}, transparent)`, marginBottom: '20px' }} />
                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, fontFamily: 'Outfit', fontSize: '0.95rem' }}>{item.content}</p>
              </div>
            ))}
          </div>

          {/* Core Values */}
          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', ...reveal(visionVisible, 0.2) }}>
            {[
              { icon: Award, label: 'Quality First' },
              { icon: Users, label: 'Client Focus' },
              { icon: Factory, label: 'Innovation' },
              { icon: Globe, label: 'Sustainability' },
              { icon: CheckCircle, label: 'Integrity' },
            ].map((v, i) => (
              <div key={i} className="stat-card" style={{ padding: '24px', textAlign: 'center' }}>
                <v.icon size={24} color="#d4a017" style={{ margin: '0 auto 12px' }} />
                <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>{v.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capability */}
      <section ref={mfgRef} style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: '1300px', margin: '0 auto', padding: '0 24px', gap: '30px', alignItems: 'center', }}>
          <div style={{ position: 'relative', height: '560px' }}>
            <img src={manufacturingPlantImg} alt="Manufacturing Plant" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />
          </div>
          <div style={{ background: 'linear-gradient(135deg, #0d1117, #080808)', display: 'flex', alignItems: 'center', padding: '60px' }}>
            <div style={{ ...reveal(mfgVisible, 0) }}>
              <div className="section-tag" style={{ marginBottom: '12px' }}>Manufacturing</div>
              <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2.2rem, 3vw, 3.2rem)', letterSpacing: '3px', marginBottom: '24px' }}>
                WORLD-CLASS <span className="gold-text">MANUFACTURING</span> CAPABILITY
              </h2>
              <div className="industrial-line" />
              <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, marginBottom: '32px', fontFamily: 'Outfit', fontSize: '0.95rem' }}>
                Our ISO-certified plant features advanced blending towers, automated filling lines with volumetric accuracy, and fully equipped R&D and quality testing laboratories.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Advanced multi-grade blending technology',
                  'Automated high-speed filling lines',
                  'In-house R&D laboratory',
                  '3,000 MT annual production capacity',
                  'Stringent batch QC testing',
                  'GPCB Approved products',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.6)', fontFamily: 'Outfit', fontSize: '0.9rem' }}>
                    <div style={{ width: '6px', height: '6px', background: '#d4a017', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Culture */}
      <section ref={cultureRef} style={{ padding: '100px 0', background: '#080808' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div style={{ ...reveal(cultureVisible, 0) }}>
              <div className="section-tag" style={{ marginBottom: '12px' }}>Work Culture</div>
              <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', letterSpacing: '3px', marginBottom: '24px' }}>
                DRIVEN BY <span className="gold-text">PEOPLE,</span> POWERED BY PURPOSE
              </h2>
              <div className="industrial-line" />
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, marginBottom: '20px', fontFamily: 'Outfit' }}>
                At INNOLUBES, our greatest asset is our team. We foster a culture of continuous learning, innovation, and collaboration. Our expert chemists, engineers, and sales professionals are passionate about delivering the best lubrication solutions.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.9, marginBottom: '32px', fontFamily: 'Outfit' }}>
                We invest heavily in employee development, safety training, and creating a workplace where every team member can grow and contribute to our mission of industrial excellence.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {['Expert Team', 'Ongoing Training', 'Safe Environment', 'Innovation Culture'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.6)', fontFamily: 'Outfit', fontSize: '0.9rem' }}>
                    <CheckCircle size={14} color="#d4a017" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative', ...reveal(cultureVisible, 0.2) }}>
              <img src={teamMeetingImg} alt="Team Meeting" style={{ width: '100%', height: '460px', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', top: '-16px', left: '-16px', right: '16px', bottom: '16px', border: '1px solid rgba(212,160,23,0.2)', zIndex: -1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition */}
      <section
        ref={exhibRef}
        style={{
          position: 'relative',
          height: '540px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 24px',
        }}
      >
        {/* Background Image */}
        <img
          src={exhibitionImg}
          alt="Exhibition"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center', // image center
            transform: 'scale(1.05)', // thoda zoom
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.82) 100%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: '1300px',
            margin: '0 auto',
            padding: '0 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            ...reveal(exhibVisible, 0),
          }}
        >
          <div
            style={{
              maxWidth: '620px',
            }}
          >
            <div
              className="section-tag"
              style={{ marginBottom: '16px' }}
            >
              Industrial Exhibitions
            </div>

            <h2
              style={{
                fontFamily: 'Bebas Neue',
                fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
                letterSpacing: '3px',
                lineHeight: 1.05,
                marginBottom: '20px',
              }}
            >
              SHOWCASING INNOVATION AT{' '}
              <span className="gold-text">
                INDIA'S TOP
              </span>{' '}
              INDUSTRIAL EXPOS
            </h2>

            <p
              style={{
                color: 'rgba(255,255,255,0.68)',
                lineHeight: 1.8,
                marginBottom: '32px',
                fontFamily: 'Outfit',
              }}
            >
              INNOLUBES actively participates in major
              national and international industrial
              exhibitions, staying at the forefront of
              industry trends and showcasing our latest
              product innovations.
            </p>

            <Link to="/contact">
              <button
                className="btn-gold"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.85rem',
                }}
              >
                Connect With Us
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>

        {/* Responsive */}
        <style>{`
    @media (max-width: 768px) {
      section {
        height: auto !important;
        padding: 80px 20px !important;
      }

      section div[style*="max-width: 1300px"] {
        padding: 0 !important;
      }

      section h2 {
        font-size: 2.3rem !important;
        line-height: 1.15 !important;
      }
    }
  `}</style>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          section > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
