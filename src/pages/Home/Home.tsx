import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { content } from '../../data/content';
import styles from './Home.module.css';

// Troca de vídeo: acontece enquanto o topo do primeiro card
// sobe de 75% até 35% da altura da tela.
const SWAP_START = 0.75;
const SWAP_END = 0.35;

// Logo: some entre 3% e 15% de rolagem (em alturas de tela).
const LOGO_START = 0.03;
const LOGO_END = 0.15;

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

// Curva suave (ease-in-out) para a transição não parecer linear.
const smoothstep = (t: number) => t * t * (3 - 2 * t);

const roundOpacity = (value: number) => Math.round(value * 1000) / 1000;

interface ScrollSequenceProps {
  cardsRef: React.RefObject<HTMLElement | null>;
}

const ScrollSequence: React.FC<ScrollSequenceProps> = ({ cardsRef }) => {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // Atualiza as opacidades direto no DOM, sem re-render do React.
  useEffect(() => {
    let frame = 0;
    let lastVideoOpacity = -1;
    let lastLogoOpacity = -1;

    // A altura da tela só é recalculada quando a largura muda
    // (rotação) ou a altura muda muito. Assim a barra de endereço
    // do celular aparecendo/sumindo não faz a transição pular.
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    const handleResize = () => {
      if (
        window.innerWidth !== viewportWidth ||
        Math.abs(window.innerHeight - viewportHeight) > 150
      ) {
        viewportWidth = window.innerWidth;
        viewportHeight = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);

    const update = () => {
      const firstCard = cardsRef.current?.firstElementChild;

      if (firstCard && video1Ref.current) {
        const cardTop =
          firstCard.getBoundingClientRect().top / viewportHeight;

        const swap = smoothstep(
          clamp01((SWAP_START - cardTop) / (SWAP_START - SWAP_END))
        );

        const videoOpacity = roundOpacity(1 - swap);

        if (videoOpacity !== lastVideoOpacity) {
          video1Ref.current.style.opacity = String(videoOpacity);
          lastVideoOpacity = videoOpacity;
        }
      }

      if (logoRef.current) {
        const scrolled = window.scrollY / viewportHeight;

        const logoOpacity = roundOpacity(
          1 - smoothstep(
            clamp01((scrolled - LOGO_START) / (LOGO_END - LOGO_START))
          )
        );

        if (logoOpacity !== lastLogoOpacity) {
          logoRef.current.style.opacity = String(logoOpacity);
          lastLogoOpacity = logoOpacity;
        }
      }

      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
    };
  }, [cardsRef]);

  // Garante que os vídeos estejam mutados e tenta iniciar a reprodução.
  useEffect(() => {
    const videos = [
      video1Ref.current,
      video2Ref.current,
    ];

    const playVideos = async () => {
      for (const video of videos) {
        if (!video) continue;

        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;

        try {
          await video.play();
        } catch (error) {
          console.warn(
            'O navegador bloqueou o autoplay deste vídeo:',
            error
          );
        }
      }
    };

    playVideos();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        playVideos();
      }
    };

    document.addEventListener(
      'visibilitychange',
      handleVisibilityChange
    );

    return () => {
      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange
      );
    };
  }, []);

  // O vídeo 2 fica sempre visível por baixo; só o vídeo 1
  // some/volta por cima dele, sem escurecer no meio da troca.
  return (
    <section className={styles.videoSequence}>
      <div className={styles.stage}>

        <video
          ref={video1Ref}
          className={styles.video}
          style={{
            zIndex: 2,
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
        >
          <source
            src={content.home.scrollVideos[0].url}
            type="video/mp4"
          />
        </video>

        <video
          ref={video2Ref}
          className={styles.video}
          style={{
            zIndex: 1,
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
        >
          <source
            src={content.home.scrollVideos[1].url}
            type="video/mp4"
          />
        </video>

        <div className={styles.overlay} />

        <div
          ref={logoRef}
          className={styles.homeLogo}
        >
          Sa Surf
        </div>

      </div>
    </section>
  );
};


const Home: React.FC = () => {
  const cardsRef = useRef<HTMLElement>(null);

  return (
    <main className={styles.home}>

      <ScrollSequence cardsRef={cardsRef} />

      <section
        ref={cardsRef}
        className={styles.editorialOverlay}
      >
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