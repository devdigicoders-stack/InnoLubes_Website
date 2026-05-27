import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { logo } from '../assets/images/index.js';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar({ onInquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9000,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled
          ? 'rgba(8,8,8,0.97)'
          : 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,160,23,0.15)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.6)' : 'none',
      }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img src={logo} alt="INNOLUBES" style={{
              height: scrolled ? '44px' : '52px',
              objectFit: 'contain',
              transition: 'all 0.4s ease',
              filter: 'drop-shadow(0 0 12px rgba(212,160,23,0.4))',
            }} />
          </Link>

          {/* Desktop Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hidden-mobile">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                style={{ textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="hidden-mobile">
            <button className="btn-gold" onClick={onInquiry} style={{ fontSize: '0.78rem', padding: '10px 24px' }}>
              Get Quote
            </button>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'none' }}
            className="show-mobile"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            background: 'rgba(8,8,8,0.98)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(212,160,23,0.15)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                style={{ textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
              >
                {link.label}
              </Link>
            ))}
            <button className="btn-gold" onClick={onInquiry} style={{ marginTop: '16px', fontSize: '0.8rem' }}>
              Get Free Quote
            </button>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
