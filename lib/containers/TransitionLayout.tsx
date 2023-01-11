'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

import styles from '../../styles/PageLayout.module.scss'
import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'

export const TransitionLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <AnimatePresence mode="wait">
    <header className={styles.header}>
      <div style={{ position: 'relative', flex: 1, width: '100%', minHeight: 'calc(100% - 3.25rem - 1px)' }}>
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ ease: 'linear', delay: 0.5, duration: 1 }}
          className={styles.header__banner}
        />
        <div className={styles.logo_wrapper}>
          <Logo className={styles.logo} />
        </div>
      </div>
      <div style={{ position: 'relative', width: '100%', flex: 1 }}>
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ ease: 'linear', delay: 0.5 }}
          className={styles.nav_wrapper}
          key={uuidv4()}
        >
          <Navigation />
        </motion.div>
      </div>
    </header>
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
