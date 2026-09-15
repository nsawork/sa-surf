import React, { useEffect, useState } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

import '@photo-sphere-viewer/core/index.css';
import './PanoramaViewer.css';

interface PanoramaViewerProps {
    src: string;
    title?: string;
}

const PanoramaViewer: React.FC<PanoramaViewerProps> = ({
    src,
    title = 'Panorama 360°',
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const closePanorama = () => {
        setIsOpen(false);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                window.dispatchEvent(new Event('resize'));

                if (window.visualViewport) {
                    window.visualViewport.dispatchEvent(new Event('resize'));
                }
            });
        });
    };

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closePanorama();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return (
        <>
            <div className="panoramaCardPreview">
                <div className="panoramaPlanetViewer">
                    <ReactPhotoSphereViewer
                        src={src}
                        width="100%"
                        height="100%"
                        littlePlanet={true}
                        navbar={false}
                        defaultZoomLvl={0}
                        defaultPitch={0}
                        defaultYaw={0}
                        mousewheel={false}
                        mousemove={false}
                        touchmoveTwoFingers={false}
                    />
                </div>

                <div className="panoramaCardOverlay">
                    <div className="panoramaCardText">
                        <span>EXPERIÊNCIA IMERSIVA</span>
                        <strong>360°</strong>
                    </div>

                    <button
                        type="button"
                        className="panoramaOpenButton"
                        onClick={() => setIsOpen(true)}
                    >
                        <span>VER 360°</span>
                        <span className="panoramaOpenArrow">↗</span>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="panoramaModal">
                    <button
                        type="button"
                        className="panoramaModalBackdrop"
                        aria-label="Fechar panorama"
                        onClick={closePanorama}
                    />

                    <div className="panoramaModalContent">
                        <header className="panoramaModalHeader">
                            <div>
                                <span className="panoramaModalLabel">
                                    EXPERIÊNCIA IMERSIVA
                                </span>

                                <h2>{title}</h2>
                            </div>

                            <button
                                type="button"
                                className="panoramaCloseButton"
                                onClick={closePanorama}
                                aria-label="Fechar visualização 360°"
                            >
                                ×
                            </button>
                        </header>

                        <div className="panoramaViewerArea">
                            <ReactPhotoSphereViewer
                                src={src}
                                width="100%"
                                height="100%"
                                navbar={['zoom', 'fullscreen']}
                                defaultYaw={0}
                                defaultPitch={0}
                                defaultZoomLvl={42}
                                minFov={30}
                                maxFov={100}
                                moveSpeed={1}
                                zoomSpeed={1}
                                moveInertia={true}
                                mousewheel={true}
                                mousemove={true}
                                touchmoveTwoFingers={false}
                                loadingTxt="Carregando panorama..."
                            />
                        </div>

                        <div className="panoramaModalFooter">
                            <span>Arraste para explorar</span>
                            <span>Scroll para aproximar</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PanoramaViewer;