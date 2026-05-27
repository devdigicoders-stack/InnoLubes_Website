import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { corporateOfficeImg } from '../assets/images/index.js';

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', product: '', message: '' });
  const [heroRef, heroVisible] = useScrollReveal(0.05);
  const [formRef, formVisible] = useScrollReveal(0.1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reveal = (v, d = 0) => ({
    opacity: v ? 1 : 0,
    transform: v ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.8s ease ${d}s, transform 0.8s ease ${d}s`,
  });

  return (
    <main style={{ background: '#0a0a0a', paddingTop: '88px' }}>

      {/* Hero Banner */}
      <section ref={heroRef} style={{ position: 'relative', height: '420px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: '-10%', backgroundImage: `url(${corporateOfficeImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.7) 100%)' }} />
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1300px', margin: '0 auto', padding: '0 24px', ...reveal(heroVisible, 0) }}>
          <div className="section-tag" style={{ marginBottom: '16px' }}>Get In Touch</div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(3rem, 6vw, 5.5rem)', letterSpacing: '4px', lineHeight: 1 }}>
            CONTACT <span className="gold-text">INNOLUBES</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '16px', fontFamily: 'Outfit', maxWidth: '500px', lineHeight: 1.7 }}>
            Our expert team is ready to assist you with any inquiry — product, technical support, or custom solutions.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontFamily: 'Rajdhani', letterSpacing: '2px' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#d4a017' }}>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section style={{ padding: '0 0 80px', background: '#080808', marginTop: '-1px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', transform: 'translateY(-40px)' }}>
            {[
              { icon: MapPin, title: 'Our Address', lines: ['Plot No. 31, Karaya Industrial Park,', '  Village Karaya, Valsad, Gujarat - 396191'] },
              { icon: Phone, title: 'Call Us', lines: ['+91 9426853064', '+91 7984441421'] },
              { icon: Mail, title: 'Email Us', lines: ['info@innolubes.com', 'sales@innolubes.com'] },
              { icon: Clock, title: 'Working Hours', lines: ['Mon – Sat: 9AM – 6PM', 'Sun: Closed'] },
            ].map(({ icon: Icon, title, lines }, i) => (
              <div key={i} style={{
                background: 'linear-gradient(145deg, #111111, #0d0d0d)',
                border: '1px solid rgba(212,160,23,0.15)',
                padding: '28px 24px',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ width: '44px', height: '44px', border: '1px solid rgba(212,160,23,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', background: 'rgba(212,160,23,0.05)' }}>
                  <Icon size={20} color="#d4a017" />
                </div>
                <h3 style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#d4a017', marginBottom: '10px' }}>{title}</h3>
                {lines.map((line, j) => (
                  <p key={j} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', fontFamily: 'Outfit', lineHeight: 1.7 }}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section ref={formRef} style={{ padding: '0 0 100px', background: '#080808' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>

            {/* Form */}
            <div style={{ ...reveal(formVisible, 0) }}>
              <div className="section-tag" style={{ marginBottom: '12px' }}>Send a Message</div>
              <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2.2rem, 3vw, 3rem)', letterSpacing: '3px', marginBottom: '32px' }}>
                LET'S TALK <span className="gold-text">LUBRICATION</span>
              </h2>

              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontFamily: 'Rajdhani', fontSize: '0.72rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(212,160,23,0.8)', display: 'block', marginBottom: '8px' }}>Full Name *</label>
                      <input className="form-input" placeholder="Your Name" required value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'Rajdhani', fontSize: '0.72rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(212,160,23,0.8)', display: 'block', marginBottom: '8px' }}>Company</label>
                      <input className="form-input" placeholder="Company Name" value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontFamily: 'Rajdhani', fontSize: '0.72rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(212,160,23,0.8)', display: 'block', marginBottom: '8px' }}>Email *</label>
                      <input className="form-input" type="email" placeholder="your@email.com" required value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'Rajdhani', fontSize: '0.72rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(212,160,23,0.8)', display: 'block', marginBottom: '8px' }}>Phone</label>
                      <input className="form-input" placeholder="+91 ..." value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Rajdhani', fontSize: '0.72rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(212,160,23,0.8)', display: 'block', marginBottom: '8px' }}>Product Interest</label>
                    <select className="form-input" value={form.product} onChange={e => setForm({ ...form, product: e.target.value })} style={{ cursor: 'pointer' }}>
                      <option value="">Select a Product Category</option>
                      <option>Hydraulic Oil</option>
                      <option>Gear Oil</option>
                      <option>Compressor Oil</option>
                      <option>AP-3 Premium Grease</option>
                      <option>Fluid Grease</option>
                      <option>Textile Oil</option>
                      <option>FRL Oil</option>
                      <option>Metal Working Fluids</option>
                      <option>Custom Formulation</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Rajdhani', fontSize: '0.72rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(212,160,23,0.8)', display: 'block', marginBottom: '8px' }}>Message *</label>
                    <textarea className="form-input" placeholder="Describe your requirements, application, or question..." rows={5}
                      required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn-gold" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', marginTop: '8px' }}>
                    <Send size={16} /> Send Message
                  </button>
                </form>
              ) : (
                <div style={{ padding: '60px 40px', textAlign: 'center', border: '1px solid rgba(212,160,23,0.2)', background: 'rgba(212,160,23,0.03)' }}>
                  <CheckCircle size={52} color="#d4a017" style={{ margin: '0 auto 20px' }} />
                  <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', letterSpacing: '3px', marginBottom: '12px' }}>
                    <span className="gold-text">MESSAGE SENT!</span>
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontFamily: 'Outfit' }}>
                    Thank you for contacting INNOLUBES. Our team will get back to you within 24 business hours.
                  </p>
                </div>
              )}
            </div>

            {/* Map + Social */}
            <div style={{ ...reveal(formVisible, 0.2) }}>
              {/* Map placeholder */}
              <div style={{ marginBottom: '28px' }}>
                <div className="section-tag" style={{ marginBottom: '12px' }}>Find Us</div>
                <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2.2rem, 3vw, 3rem)', letterSpacing: '3px', marginBottom: '24px' }}>
                  OUR <span className="gold-text">LOCATION</span>
                </h2>
              </div>

              {/* Google Map Embed placeholder */}
              <div style={{
                position: 'relative', width: '100%', height: '340px',
                border: '1px solid rgba(212,160,23,0.2)',
                background: 'linear-gradient(135deg, #0d1117, #111111)',
                overflow: 'hidden', marginBottom: '28px',
              }}>
                <iframe
                  title="INNOLUBES Location"
                  src="https://maps.google.com/maps?q=Karaya%20Industrial%20Park%20Valsad%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Social Links */}
              <div style={{ padding: '28px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,160,23,0.1)' }}>
                <div className="section-tag" style={{ marginBottom: '16px' }}>Follow Us</div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {[
                    { Icon: Facebook, label: 'Facebook', color: '#1877f2' },
                    { Icon: Instagram, label: 'Instagram', color: '#e4405f' },
                    { Icon: Linkedin, label: 'LinkedIn', color: '#0077b5' },
                    { Icon: Twitter, label: 'Twitter/X', color: '#1da1f2' },
                  ].map(({ Icon, label, color }) => (
                    <a key={label} href="#" style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,160,23,0.15)',
                      padding: '10px 16px', color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none', fontFamily: 'Rajdhani', fontSize: '0.8rem',
                      letterSpacing: '2px', textTransform: 'uppercase',
                      transition: 'all 0.3s ease', flex: 1, justifyContent: 'center',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.color = color; e.currentTarget.style.background = `${color}15`; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
