import React from 'react'
import styles from '../../styles/DefaultLayout.module.scss'

import { PT_Sans } from '@next/font/google'
const ptSans = PT_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const DefaultLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={ptSans.className}>
      <body className={styles.body}>
        <header className={styles.header}>
          <div style={{
            borderLeft: '1px solid #ddd',
            position: 'absolute',
            right: 0,
            height: '100%',
            width: '38.2%',
          }}></div>
          <nav className={styles.nav}></nav>
        </header>
        <main className={styles.main}>
          {children}
        </main>
        <aside className={styles.aside}></aside>
        <footer className={styles.footer}></footer>
      </body>
    </html>
  )
}
