import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight
} from 'lucide-react';

import { logo } from '../assets/images/index.js';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #080808 0%, #050505 100%)',
        borderTop: '1px solid rgba(212,160,23,0.15)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top Gold Line */}
      <div
        style={{
          height: '2px',
          background:
            'linear-gradient(90deg, transparent, #d4a017, #f5d98a, #d4a017, transparent)',
        }}
      />

      {/* Background Pattern */}
      <div
        className="hex-pattern"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1350px',
          margin: '0 auto',
          padding: '80px 24px 35px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Main Grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr 1.2fr 1.8fr',
            gap: '50px',
            marginBottom: '55px',
          }}
        >
          {/* Brand Section */}
          <div>
            <img
              src={logo}
              alt="INNOLUBES"
              style={{
                height: '58px',
                objectFit: 'contain',
                marginBottom: '22px',
                filter: 'drop-shadow(0 0 12px rgba(212,160,23,0.4))',
              }}
            />

            <p
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.92rem',
                lineHeight: '1.9',
                fontFamily: 'Outfit',
                maxWidth: '340px',
                marginBottom: '28px',
              }}
            >
              INNOLUBES delivers world-class industrial lubricants engineered
              for peak performance, durability, and reliability across every
              industrial application.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '14px' }}>
              {[
                { Icon: Facebook,  href: 'https://www.facebook.com/innolubes' },
                { Icon: Instagram, href: 'https://www.instagram.com/innolubes' },
                { Icon: Linkedin,  href: 'https://www.linkedin.com/company/innolubes' },
                { Icon: Twitter,   href: 'https://www.twitter.com/innolubes' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '42px',
                    height: '42px',
                    border: '1px solid rgba(212,160,23,0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    transition: '0.3s ease',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#d4a017';
                    e.currentTarget.style.color = '#d4a017';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.background = 'rgba(212,160,23,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212,160,23,0.22)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                  }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'Rajdhani',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontSize: '0.82rem',
                color: '#d4a017',
                marginBottom: '26px',
              }}
            >
              Quick Links
            </h4>

            {[
              { label: 'Home',     path: '/' },
              { label: 'About Us', path: '/about' },
              { label: 'Products', path: '/products' },
              { label: 'Solutions',path: '/solutions' },
              { label: 'Gallery',  path: '/gallery' },
              { label: 'Contact',  path: '/contact' },
            ].map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'rgba(255,255,255,0.48)',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  marginBottom: '14px',
                  transition: '0.3s ease',
                  fontFamily: 'Outfit',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#d4a017';
                  e.currentTarget.style.paddingLeft = '5px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.48)';
                  e.currentTarget.style.paddingLeft = '0px';
                }}
              >
                <ArrowRight size={13} />
                {label}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h4
              style={{
                fontFamily: 'Rajdhani',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontSize: '0.82rem',
                color: '#d4a017',
                marginBottom: '26px',
              }}
            >
              Contact Us
            </h4>

            {/* Address */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Karaya+Industrial+Park+Plot+31+Valsad+Gujarat+396191"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                gap: '14px',
                textDecoration: 'none',
                marginBottom: '22px',
              }}
            >
              <div className="footer-icon-box">
                <MapPin size={16} color="#d4a017" />
              </div>
              <p className="footer-text">
                Plot No. 31, Karaya Industrial Park,
                <br />
                Village Karaya, Valsad,
                <br />
                Gujarat - 396191
              </p>
            </a>

            {/* Phone 1 */}
            <a
              href="tel:+919426853064"
              style={{
                display: 'flex',
                gap: '14px',
                textDecoration: 'none',
                marginBottom: '16px',
              }}
            >
              <div className="footer-icon-box">
                <Phone size={16} color="#d4a017" />
              </div>
              <p className="footer-text">+91 94268 53064</p>
            </a>

            {/* Phone 2 — newly added */}
            <a
              href="tel:+917984441421"
              style={{
                display: 'flex',
                gap: '14px',
                textDecoration: 'none',
                marginBottom: '22px',
              }}
            >
              <div className="footer-icon-box">
                <Phone size={16} color="#d4a017" />
              </div>
              <p className="footer-text">+91 79844 41421</p>
            </a>

            {/* Email */}
            <a
              href="mailto:info@innolubes.com"
              style={{
                display: 'flex',
                gap: '14px',
                textDecoration: 'none',
              }}
            >
              <div className="footer-icon-box">
                <Mail size={16} color="#d4a017" />
              </div>
              <p className="footer-text">info@innolubes.com</p>
            </a>
          </div>

          {/* Google Map — fixed embed */}
          <div>
            <h4
              style={{
                fontFamily: 'Rajdhani',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontSize: '0.82rem',
                color: '#d4a017',
                marginBottom: '26px',
              }}
            >
              Our Location
            </h4>

            <div
              style={{
                overflow: 'hidden',
                border: '1px solid rgba(212,160,23,0.18)',
                background: 'rgba(255,255,255,0.03)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '200px',
                  overflow: 'hidden',
                }}
              >
                <iframe
                  title="INNOLUBES Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.0!2d72.9!3d20.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ef1b5c0d7afd%3A0x6c7e4e5e7e5e7e5e!2sKaraya%20Industrial%20Park%2C%20Valsad%2C%20Gujarat%20396191!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)',
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '18px',
          }}
        >
          <p
            style={{
              color: 'rgba(255,255,255,0.28)',
              fontSize: '0.82rem',
              fontFamily: 'Outfit',
            }}
          >
            © {new Date().getFullYear()} Crafted with ❤️ by #TeamDigiCoders.
          </p>

          <div style={{ display: 'flex', gap: '22px', flexWrap: 'wrap' }}>
            {[
              { label: 'Privacy Policy', path: '/privacy-policy' },
              { label: 'Terms of Use',   path: '/terms-of-use' },
              { label: 'Sitemap',        path: '/sitemap' },
            ].map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                style={{
                  color: 'rgba(255,255,255,0.28)',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  transition: '0.3s ease',
                  fontFamily: 'Outfit',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#d4a017';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.28)';
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        .footer-icon-box {
          width: 38px;
          height: 38px;
          border: 1px solid rgba(212,160,23,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: rgba(255,255,255,0.02);
        }

        .footer-text {
          color: rgba(255,255,255,0.5);
          font-size: 0.88rem;
          line-height: 1.7;
          font-family: Outfit;
          margin: 0;
        }

        @media (max-width: 1100px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 700px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          footer iframe {
            height: 220px !important;
          }
        }
      `}</style>
    </footer>
  );
}
