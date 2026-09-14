import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import styles from '../About/InternalPage.module.css';
import PanoramaViewer from '../Context/PanoramaViewer';

const Work: React.FC = () => {
  const data = content.pages.work;

  return (
    <div className={styles.pageContainer}>

      <div className={styles.heroWrapper}>

        <img
          src={data.heroImage}
          alt="Sa.Surf Serviços"
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


      <div className={styles.servicesIntro}>
        <p>
          {data.subtitle}
        </p>
      </div>

      <div className={styles.thanksSection}>

        <h2 className={styles.thanksTitle}>
          Agradecimentos
        </h2>

        <div className={styles.thanksList}>
          <span>@OficialGYM_</span>
          <span>@OficialGYM.sbc</span>
          <span>@lucasminaya</span>
          <span>@_armadilha</span>
          <span>@faniehoficial</span>
          <span>@kleber_prior</span>
          <span>@thiago_torrubia</span>
        </div>

      </div>



      <div className={styles.workProjects}>

        {data.projects?.map((project, index) => (

          <motion.article
            key={index}
            className={styles.workProject}
            initial={{
              opacity: 0,
              y: 40,
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
          >

            {project.type === 'panorama' && project.media ? (

              <PanoramaViewer
                src={project.media}
                title={project.client}
              />

            ) : project.video ? (

              <div className={styles.workVideoWrapper}>

                <video
                  className={styles.workVideo}
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                />

              </div>

            ) : null}


            <div className={styles.workProjectInfo}>

              <div className={styles.workProjectMain}>

                <h2 className={styles.workProjectClient}>
                  {project.client}
                </h2>

                <p className={styles.workProjectService}>
                  {project.service}
                </p>

              </div>


              <div className={styles.workProjectMeta}>

                {project.location && (
                  <span>{project.location}</span>
                )}

                {project.year && (
                  <span>{project.year}</span>
                )}

              </div>


              {project.description && (
                <p className={styles.workProjectDescription}>
                  {project.description}
                </p>
              )}

            </div>

          </motion.article>

        ))}

      </div>

    </div>
  );
};

export default Work;
