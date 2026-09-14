import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { content } from '../../data/content';
import styles from './Header.module.css';
import logo from '../../assets/logotlg.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled && window.location.pathname !== '/' ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="Sa.Surf" />
          </Link>

          <nav className={styles.desktopNav}>
            {content.header.navLinks.map((link, index) => (
              <Link key={index} to={link.path} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle Menu">
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileMenuOverlay}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.mobileMenuHeader}>
              <Link to="/" className={styles.logo} onClick={toggleMenu}>
                <img src={logo} alt="Sa.Surf" />
              </Link>
              <button className={styles.desktopCloseButton} onClick={toggleMenu}>
                <X size={28} />
              </button>
            </div>

            <nav className={styles.mobileNav}>
              {content.header.navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    className={styles.mobileNavLink}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
