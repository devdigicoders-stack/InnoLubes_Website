import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import FloatingButtons from './components/FloatingButtons';
import InquiryModal from './components/InquiryModal';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const modalTimer = setTimeout(() => setShowModal(true), 5000);
      return () => clearTimeout(modalTimer);
    }
  }, [loading]);

  return (
    <Router>
      <div className="noise-overlay" />
      <CustomCursor />
      <ScrollProgress />
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar onInquiry={() => setShowModal(true)} />
          <Routes>
            <Route path="/" element={<Home onInquiry={() => setShowModal(true)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <FloatingButtons />
          {showModal && <InquiryModal onClose={() => setShowModal(false)} />}
        </>
      )}
    </Router>
  );
}
