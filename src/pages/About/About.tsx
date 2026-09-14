import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import styles from './InternalPage.module.css';
import { Link } from 'react-router-dom';
import atalhoImage from '../../assets/atalho.jpeg';
import imagem2 from '../../assets/4koriginal3.jpeg';
import PanoramaViewer from '../Context/PanoramaViewer';

const ImageTransition: React.FC<{
  image: string;
  alt: string;
  caption: string;
}> = ({ image, alt, caption }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isMobile = window.innerWidth <= 768;

      const start = isMobile
        ? windowHeight * 0.50
        : windowHeight * 0.85;

      const end = isMobile
        ? windowHeight * 0.45
        : windowHeight * 0.05;

      const distance = start - end;

      const value = Math.min(
        1,
        Math.max(
          0,
          (start - rect.top) / distance
        )
      );

      setProgress(value);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const imageWidth = 35 + progress * 65;

  const isMobile = window.innerWidth <= 768;

  const imageHeight = isMobile
    ? imageWidth * (9 / 16)
    : 35 + progress * 65;

  const captionOpacity =
    progress > 0.75
      ? Math.min(1, (progress - 0.75) / 0.25)
      : 0;

  return (
    <section
      ref={sectionRef}
      className={styles.aboutTransition}
    >
      <div
        className={styles.aboutTransitionImage}
        style={{
          width: `${imageWidth}vw`,
          height: isMobile
            ? `${imageHeight}vw`
            : `${imageHeight}vh`,
        }}
      >
        <img
          src={image}
          alt={alt}
        />

        <p
          className={styles.transitionCaption}
          style={{
            opacity: captionOpacity,
          }}
        >
          {caption}
        </p>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  const data = content.pages.about;

  return (
    <div className={styles.pageContainer}>

      {/* HERO */}
      <div className={styles.heroWrapper}>
        <img
          src={data.heroImage}
          alt="About Hero"
          className={styles.heroImage}
        />

        <div className={styles.heroOverlay}></div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
        >
          {data.title}
        </motion.h1>
      </div>

      {/* TEXTO */}
      <div className={styles.contentWrapper}>
        <div className={styles.textSection}>
          {data.textBlocks.map((text, index) => (
            <motion.p
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-10%',
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              className={styles.textBlock}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* CHAMADA PARA SERVIÇOS */}
        <div className={styles.servicesIntro}>
          <p>Confira alguns dos nossos trabalhos</p>

          <Link
            to="/work"
            className={styles.servicesButton}
          >
            Ver serviços
          </Link>
        </div>
      </div>

      {/* EXPERIÊNCIA 360° */}
      <div className={styles.aboutPanorama}>
        <PanoramaViewer
          src="/panoramas/360.jpeg"
          title="Visão imersiva 360º"
        />
      </div>

      {/* PRIMEIRA TRANSIÇÃO */}
      <ImageTransition
        image={atalhoImage}
        alt="Ítalo Ferreira surfando"
        caption="Itaúna, RJ - Surf"
      />

      {/* SEGUNDA TRANSIÇÃO */}
      <ImageTransition
        image={imagem2}
        alt="Surf em Saquarema"
        caption="Ítalo Ferreira - Itaúna, RJ"
      />

    </div>
  );
};

export default About;