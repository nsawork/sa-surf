import React from 'react';
import { content } from '../../data/content';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer} ${window.location.pathname === '/' ? styles.homeFooter : ''}`}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <a href={`mailto:${content.global.contactEmail}`}>
              EMAIL
            </a>
          </div>
          <div className={styles.socials}>
            {Object.entries(content.global.socials).map(([platform, url]) => (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                {platform}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
