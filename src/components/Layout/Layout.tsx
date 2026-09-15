import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    let animationFrame: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    animationFrame = requestAnimationFrame(raf);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event('resize'));

        if (window.visualViewport) {
          window.visualViewport.dispatchEvent(new Event('resize'));
        }
      });
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    // Sempre que mudar de página, força o Lenis para o topo
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, {
        immediate: true,
      });
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  return (
    <div className="layout-wrapper">
      <Header />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;