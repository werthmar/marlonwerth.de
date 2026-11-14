'use client';

import { useEffect, useRef } from 'react';

// Wraps a picture so it develops once (grey to colour, slight settle) when it
// first comes on screen. The state lives on a data attribute so no re-render is
// needed; content is visible without JS and under reduced motion.
export default function Develop({
    children,
    className = '',
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const reduce = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;
        if (reduce || el.getBoundingClientRect().top < window.innerHeight * 0.9)
            return;
        el.dataset.state = 'latent';
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.dataset.state = 'developed';
                    io.disconnect();
                }
            },
            { rootMargin: '0px 0px -20% 0px' }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div ref={ref} className={`develop ${className}`}>
            {children}
        </div>
    );
}
