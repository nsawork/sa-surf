import React, { useEffect, useRef } from 'react';
import styles from '../../pages/About/InternalPage.module.css';

interface ProjectVideoProps {
  src: string;
  poster?: string;
  vertical?: boolean;
}

// Vídeo de projeto em moldura padrão (16:9 ou 9:16).
// A capa aparece na hora e o vídeo só é baixado quando a pessoa dá play.
const ProjectVideo: React.FC<ProjectVideoProps> = ({
  src,
  poster,
  vertical,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pausa o vídeo quando ele sai da tela, para não pesar a rolagem.
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
        }
      },
      { threshold: 0 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${styles.videoFrame} ${vertical ? styles.videoFrameVertical : ''}`}
    >
      <video
        ref={videoRef}
        className={styles.videoFrameMedia}
        src={src}
        poster={poster}
        controls
        playsInline
        preload="none"
        disablePictureInPicture
      />
    </div>
  );
};

export default ProjectVideo;
