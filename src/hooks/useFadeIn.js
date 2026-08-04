import { useEffect } from 'react';

export const useFadeIn = () => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const observeElements = () => {
            const fadeElements = document.querySelectorAll('.fade-in:not(.visible)');
            fadeElements.forEach(element => {
                observer.observe(element);
            });
        };

        // Initial observation
        observeElements();

        // Observe future elements added to the DOM
        const mutationObserver = new MutationObserver(observeElements);
        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);
};
