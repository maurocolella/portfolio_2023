'use client'

import React from 'react'
import styles from '../../styles/PageLayout.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

export const TransitionLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <AnimatePresence mode="wait">
    <motion.header
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ ease: 'linear', delay: 0.5 }}
      className={styles.header}></motion.header>
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ ease: 'linear', delay: 0.5 }}
      className={styles.nav_wrapper}
    >
      <nav className={styles.nav}>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 0.5, delay: 1 }}
          className={styles.nav__menu}
        >
          <li className={styles.nav__cell}>
            <Link className={styles.nav__link} href="/">Home</Link>
          </li>
          <li className={styles.nav__cell}>
            <Link className={styles.nav__link} href="/about">About</Link>
          </li>
        </motion.ul>
      </nav>
    </motion.div>
    <main className={styles.main}>
      {children}
    </main>
    <motion.aside
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ ease: 'linear', duration: 1, delay: 0.5 }}
      className={styles.aside}
    />
    <motion.footer
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ ease: 'linear', delay: 0.5 }}
      className={styles.footer}
    />
  </AnimatePresence>
}
