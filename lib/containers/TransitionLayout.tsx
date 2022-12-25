'use client'

import React from 'react'
import styles from '../../styles/PageLayout.module.scss'
import { AnimatePresence, motion } from 'framer-motion'

export const TransitionLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <AnimatePresence mode="wait">
    <motion.header
      initial={{ left: '-100vw' }}
      animate={{ left: 0 }}
      transition={{ ease: 'linear' }}
      className={styles.header}
    >
      <nav className={styles.nav}></nav>
    </motion.header>
    <main className={styles.main}>
      {children}
    </main>
    <motion.aside
      initial={{ top: '-100%' }}
      animate={{ top: 0 }}
      transition={{ ease: 'linear', duration: 1 }}
      className={styles.aside}
    />
    <motion.footer
      initial={{ left: '100vw' }}
      animate={{ left: 0 }}
      transition={{ ease: 'linear' }}
      className={styles.footer}
    />
  </AnimatePresence>
}
