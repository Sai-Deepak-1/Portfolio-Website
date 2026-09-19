'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { opacity, slideUp } from './anim';

const words = [
    "Bonjour",       // French
    "Ciao",          // Italian
    "Olà",           // Portuguese
    "やあ",            // Japanese
    "Hallå",         // Swedish
    "Guten tag",     // German
    "Hallo",         // Dutch
    "سلام",          // Urdu (Salaam)
    "ನಮಸ್ಕಾರ",       // Kannada (Namaskara)
    "നമസ്കാരം",      // Malayalam (Namaskaram)
    "नमस्कार",       // Marathi (Namaskar)
    "नमस्ते",        // Hindi (Namaste)
    "నమస్కారం",      // Telugu (Namaskaram)
    "Hello",         // English

  ];

export default function Index() {
    const reduceMotion = useReducedMotion();
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});

    useEffect( () => {
        const frame = window.requestAnimationFrame(() => {
            setDimension({width: window.innerWidth, height: window.innerHeight})
        });
        return () => window.cancelAnimationFrame(frame);
    }, [])

    useEffect( () => {
        if (reduceMotion) return;
        if(index == words.length - 1) return;
        const timer = setTimeout( () => {
            setIndex(index + 1)
        }, index == 0 ? 1000 : 150)
        return () => clearTimeout(timer)
    }, [index, reduceMotion])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
        }
    }

    if (reduceMotion) return null;

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            {dimension.width > 0 && 
            <>
                <motion.p variants={opacity} initial="initial" animate="enter"><span></span>{words[index]}</motion.p>
                <svg>
                    <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>
            </>
            }
        </motion.div>
    )
}
