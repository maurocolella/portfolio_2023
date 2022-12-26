'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

import styles from '../../styles/PageLayout.module.scss'
import { Logo } from '@/components/Logo'

export const TransitionLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <AnimatePresence mode="wait">
    <header className={styles.header}>
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ ease: 'linear', delay: 0.5, duration: 1 }}
        className={styles.header__banner}
      />
      <div className={styles.logo_wrapper}>
        <Logo className={styles.logo} />
      </div>
    </header>
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ ease: 'linear', delay: 0.5 }}
      className={styles.nav_wrapper}
      key={uuidv4()}
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
      transition={{ ease: 'linear', duration: 2, delay: 1 }}
      className={styles.aside}
      key={uuidv4()}
    />
    <motion.footer
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ ease: 'linear', delay: 0.5 }}
      className={styles.footer}
      key={uuidv4()}
    />
  </AnimatePresence>
}
