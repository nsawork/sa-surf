import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        // Corrige o scroll quando o Lenis estiver ativo
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 50);
    }, [pathname]);

    return null;
}

export default ScrollToTop;