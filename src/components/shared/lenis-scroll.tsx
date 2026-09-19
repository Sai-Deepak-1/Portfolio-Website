'use client'

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisScroll() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const lenis = new Lenis();
        let animationFrame = 0;

        function raf(time: number) {
            lenis.raf(time);
            animationFrame = requestAnimationFrame(raf);
        }

        animationFrame = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(animationFrame);
            lenis.destroy();
        };
    }, []);

    return null;
}
