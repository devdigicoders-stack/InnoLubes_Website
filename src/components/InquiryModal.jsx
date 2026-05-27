import { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

export default function InquiryModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', product: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={{
        background: 'linear-gradient(145deg, #111111, #0a0a0a)',
        border: '1px solid rgba(212,160,23,0.3)',
        maxWidth: '560px', width: '100%',
        maxHeight: '90vh', overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 0 80px rgba(212,160,23,0.15)',
      }}>
        {/* Top gold line */}
        <div style={{ height: '3px', background: 'linear-gradient(90deg, #d4a017, #f5d98a, #d4a017)' }} />

        <button onClick={onClose} style={{
          position: 'absolute', top: '16px', right: '16px',
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          color: 'white', width: '36px', height: '36px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 1,
        }}>
          <X size={16} />
        </button>

        <div style={{ padding: '36px' }}>
          {!submitted ? (
            <>
              <div className="section-tag" style={{ marginBottom: '8px' }}>Quick Inquiry</div>
              <h2 style={{ fontFamily: 'Bebas Neue', fontSize: '2.2rem', letterSpacing: '3px', marginBottom: '8px' }}>
                GET A <span className="gold-text">FREE QUOTE</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '28px', fontFamily: 'Outfit' }}>
                Our specialists will respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <input className="form-input" placeholder="Your Name *" required value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })} />
                  <input className="form-input" placeholder="Company Name" value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <input className="form-input" type="email" placeholder="Email *" required value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })} />
                  <input className="form-input" placeholder="Phone Number" value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
                <select className="form-input" value={form.product} onChange={e => setForm({ ...form, product: e.target.value })}
                  style={{ cursor: 'pointer' }}>
                  <option value="">Select Product Category</option>
                  <option>Hydraulic Oil</option>
                  <option>Gear Oil</option>
                  <option>Compressor Oil</option>
                  <option>Grease (AP-3 / Fluid)</option>
                  <option>Textile Oil</option>
                  <option>FRL Oil</option>
                  <option>Metal Working Fluids</option>
                  <option>Other</option>
                </select>
                <textarea className="form-input" placeholder="Your Message / Requirements" rows={4}
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ resize: 'vertical' }} />
                <button type="submit" className="btn-gold" style={{ marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <Send size={16} />
                  Send Inquiry
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <CheckCircle size={56} color="#d4a017" style={{ margin: '0 auto 20px' }} />
              <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', letterSpacing: '3px', marginBottom: '12px' }}>
                <span className="gold-text">INQUIRY SENT!</span>
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '28px' }}>
                Thank you! Our team will contact you within 24 hours.
              </p>
              <button className="btn-gold" onClick={onClose}>Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
