import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import styles from '../About/InternalPage.module.css';
import PanoramaViewer from './PanoramaViewer';

const Context: React.FC = () => {
  const data = content.pages.context;

  return (
    <div className={styles.contextPage}>

      <div className={styles.heroWrapper}>
        <img
          src={data.heroImage}
          alt="Context Hero"
          className={styles.heroImage}
        />

        <div className={styles.heroOverlay}></div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {data.title}
        </motion.h1>
      </div>

      <div className={styles.contextIntro}>
        <span className={styles.contextIntroLabel}>
          ESTRATÉGIA E PRODUÇÃO VISUAL
        </span>

        <h2>
          Marketing.
        </h2>

        <p>
          Desenvolvemos estratégias de marketing para transformar ideias em
          conteúdos visuais de alto impacto, combinando captação aérea,
          gravações internas e externas, fotografia e recursos de
          inteligência artificial.
        </p>

        <p>
          Cada produção é pensada de acordo com o objetivo da marca,
          explorando diferentes perspectivas, movimentos e possibilidades
          criativas para comunicar produtos, serviços e experiências.
        </p>
      </div>

      <div className={styles.contextItems}>
        {data.items.map((item, index) => (
          <motion.section
            key={item.id}
            className={styles.contextItem}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8 }}
          >
            <div
              className={`${styles.contextMedia} ${index % 2 === 1 ? styles.contextMediaRight : ''
                }`}
            >
              {item.type === 'video' ? (
                <video
                  src={item.media}
                  controls
                  playsInline
                  preload="metadata"
                  className={styles.contextVideo}
                />
              ) : item.type === 'panorama' ? (
                <PanoramaViewer
                  src={item.media}
                  title="Panorama aéreo 360°"
                />
              ) : (
                <img
                  src={item.media}
                  alt={item.title}
                />
              )}
            </div>

            <div
              className={`${styles.contextInfo} ${index % 2 === 1 ? styles.contextInfoLeft : ''
                }`}
            >
              <span className={styles.contextNumber}>{item.id}</span>

              <h2>{item.title}</h2>

              <p>{item.description}</p>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default Context;