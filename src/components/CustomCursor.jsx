import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  return null;
  // const cursorRef = useRef(null);
  // const followerRef = useRef(null);
  // const pos = useRef({ x: 0, y: 0 });
  // const followerPos = useRef({ x: 0, y: 0 });

  // useEffect(() => {
  //   const onMove = (e) => {
  //     pos.current = { x: e.clientX, y: e.clientY };
  //     if (cursorRef.current) {
  //       cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
  //     }
  //   };

  //   let raf;
  //   const animate = () => {
  //     followerPos.current.x += (pos.current.x - followerPos.current.x) * 0.1;
  //     followerPos.current.y += (pos.current.y - followerPos.current.y) * 0.1;
  //     if (followerRef.current) {
  //       followerRef.current.style.transform = `translate(${followerPos.current.x - 20}px, ${followerPos.current.y - 20}px)`;
  //     }
  //     raf = requestAnimationFrame(animate);
  //   };

  //   const onEnter = () => {
  //     if (cursorRef.current) cursorRef.current.style.transform += ' scale(2)';
  //     if (followerRef.current) {
  //       followerRef.current.style.width = '60px';
  //       followerRef.current.style.height = '60px';
  //       followerRef.current.style.borderColor = 'rgba(212,160,23,0.8)';
  //     }
  //   };

  //   const onLeave = () => {
  //     if (followerRef.current) {
  //       followerRef.current.style.width = '40px';
  //       followerRef.current.style.height = '40px';
  //       followerRef.current.style.borderColor = 'rgba(212,160,23,0.5)';
  //     }
  //   };

  //   window.addEventListener('mousemove', onMove);
  //   document.querySelectorAll('a, button, .product-card').forEach(el => {
  //     el.addEventListener('mouseenter', onEnter);
  //     el.addEventListener('mouseleave', onLeave);
  //   });
  //   raf = requestAnimationFrame(animate);

  //   return () => {
  //     window.removeEventListener('mousemove', onMove);
  //     cancelAnimationFrame(raf);
  //   };
  // }, []);

  // return (
  //   <>
  //     <div ref={cursorRef} className="custom-cursor" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 99999 }} />
  //     <div ref={followerRef} className="custom-cursor-follower" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 99998 }} />
  //   </>
  // );
}
