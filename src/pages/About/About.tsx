import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import styles from './InternalPage.module.css';
import { Link } from 'react-router-dom';
import atalhoImage from '../../assets/atalho.jpeg';
import imagem2 from '../../assets/4koriginal3.jpeg';
import PanoramaViewer from '../Context/PanoramaViewer';

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

// Curva suave (ease-in-out) para o crescimento no celular.
const smoothstep = (t: number) => t * t * (3 - 2 * t);

const ImageTransition: React.FC<{
  image: string;
  alt: string;
  caption: string;
}> = ({ image, alt, caption }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);

  // Atualiza tamanho e legenda direto no DOM, no máximo 1x por frame.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      const section = sectionRef.current;
      const box = imageRef.current;
      const captionEl = captionRef.current;

      if (!section || !box || !captionEl) return;

      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth <= 768;

      // Celular: cresce enquanto a imagem sobe do pé até o meio da tela.
      const start = windowHeight * (isMobile ? 0.95 : 0.85);
      const end = windowHeight * (isMobile ? 0.4 : 0.05);

      const raw = clamp01(
        (start - section.getBoundingClientRect().top) / (start - end)
      );

      const progress = isMobile ? smoothstep(raw) : raw;

      if (isMobile) {
        const imageWidth = 80 + progress * 20;

        box.style.width = `${imageWidth}vw`;
        box.style.height = `${imageWidth * (9 / 16)}vw`;
      } else {
        box.style.width = `${35 + progress * 65}vw`;
        box.style.height = `${35 + progress * 65}vh`;
      }

      captionEl.style.opacity = String(
        progress > 0.75
          ? Math.min(1, (progress - 0.75) / 0.25)
          : 0
      );
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', requestUpdate, {
      passive: true,
    });
    window.addEventListener('resize', requestUpdate);

    update();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.aboutTransition}
    >
      <div
        ref={imageRef}
        className={styles.aboutTransitionImage}
      >
        <img
          src={image}
          alt={alt}
        />

        <p
          ref={captionRef}
          className={styles.transitionCaption}
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

        {/* CONTATO WHATSAPP */}
        <motion.a
          href={`${content.global.socials.whatsapp}?text=${encodeURIComponent(
            'Olá! Vim pelo site da Sa.Surf e gostaria de um orçamento.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.whatsappIcon}>
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.39 9.39 0 0 1-1.44-5.01c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.44 9.43zm8.03-17.46A11.27 11.27 0 0 0 12.05.72C5.8.72.71 5.8.7 12.05c0 2 .52 3.95 1.52 5.66L.6 23.28l5.7-1.5a11.3 11.3 0 0 0 5.74 1.47h.01c6.25 0 11.34-5.08 11.34-11.33 0-3.03-1.18-5.87-3.32-8.01z"
              />
            </svg>
          </span>

          <span className={styles.whatsappText}>
            <span className={styles.whatsappLabel}>Orçamento</span>
            <strong>Fale com a gente no WhatsApp</strong>
          </span>

          <span className={styles.whatsappArrow} aria-hidden="true">→</span>
        </motion.a>

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