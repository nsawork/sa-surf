import { useEffect, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });

            setVisible(true);
        };

        const handleMouseLeave = () => {
            setVisible(false);
        };

        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        window.addEventListener('mousemove', handleMouseMove);

        document.documentElement.addEventListener(
            'mouseleave',
            handleMouseLeave
        );

        document.addEventListener(
            'fullscreenchange',
            handleFullscreenChange
        );

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);

            document.documentElement.removeEventListener(
                'mouseleave',
                handleMouseLeave
            );

            document.removeEventListener(
                'fullscreenchange',
                handleFullscreenChange
            );
        };
    }, []);

    return (
        <div
            className={`custom-cursor ${visible ? 'is-visible' : ''} ${isFullscreen ? 'is-fullscreen' : ''
                }`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            <img src="/surf-cursors.png" alt="" />
        </div>
    );
}