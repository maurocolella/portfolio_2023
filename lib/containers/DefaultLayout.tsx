import React from 'react'
import styles from '../../styles/Layout.module.scss'

import { PT_Sans } from '@next/font/google'
const ptSans = PT_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const DefaultLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={ptSans.className}>
      <body>
        <header></header>
        <main className={styles.main}>
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  )
}
