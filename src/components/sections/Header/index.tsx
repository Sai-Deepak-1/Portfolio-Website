'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss'
import Nav from './Nav';
import { AnimatePresence } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function Home() {

  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
        onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }) }
      }
    })
  }, [])

  return (
    <>
      <div ref={header} className={styles.header}>

        <div className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.first}>Sai</p>
            <p className={styles.last}>Deepak</p>
          </div>
        </div>

        <div className={styles.nav}>
          <div className={styles.el}>
            <a>Work</a>
            <div className={styles.indicator}></div>
          </div>
          <div className={styles.el}>
            <a>About</a>
            <div className={styles.indicator}></div>
          </div>
          <div className={styles.el}>
            <a>Contact</a>
            <div className={styles.indicator}></div>
          </div>
        </div>

      </div>

      <div ref={button} className={styles.headerButtonContainer}>
        <div onClick={() => { setIsActive(!isActive) }} className={`${styles.button}`}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  )
}