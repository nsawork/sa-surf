import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { content } from '../../data/content';
import styles from './Home.module.css';

const ScrollSequence: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const section = sectionRef.current;

      if (section) {
        const rect = section.getBoundingClientRect();

        const totalDistance =
          section.offsetHeight - window.innerHeight;

        const scrolled = Math.max(0, -rect.top);

        const value =
          totalDistance > 0
            ? Math.min(1, scrolled / totalDistance)
            : 0;

        setProgress(value);
      }

      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frame);
  }, []);

  const video1Opacity =
    progress < 0.18
      ? 1
      : progress < 0.38
        ? 1 - (progress - 0.18) / 0.20
        : 0;

  const video2Opacity =
    progress < 0.18
      ? 0
      : progress < 0.38
        ? (progress - 0.18) / 0.20
        : 1;

  const logoOpacity =
    progress < 0.08
      ? 1
      : progress < 0.16
        ? 1 - (progress - 0.08) / 0.08
        : 0;

  return (
    <section
      ref={sectionRef}
      className={styles.videoSequence}
    >
      <div className={styles.stage}>

        <video
          className={styles.video}
          style={{
            opacity: video1Opacity,
            zIndex: 2,
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src={content.home.scrollVideos[0].url}
            type="video/mp4"
          />
        </video>

        <video
          className={styles.video}
          style={{
            opacity: video2Opacity,
            zIndex: 1,
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src={content.home.scrollVideos[1].url}
            type="video/mp4"
          />
        </video>

        <div className={styles.overlay} />

        <div
          className={styles.homeLogo}
          style={{
            opacity: logoOpacity,
          }}
        >
          Sa Surf
        </div>

      </div>
    </section>
  );
};


const Home: React.FC = () => {
  return (
    <main className={styles.home}>

      <ScrollSequence />

      <section className={styles.editorialOverlay}>
        {content.home.editorialNav.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={styles.editorialLink}
          >
            <div className={styles.editorialImageWrapper}>

              <img
                src={item.image}
                alt={item.label}
                className={styles.editorialImage}
              />

              <div
                className={styles.editorialImageOverlay}
              />

              <h2 className={styles.editorialLabel}>
                {item.label}
              </h2>

            </div>
          </Link>
        ))}
      </section>

    </main>
  );
};

export default Home;