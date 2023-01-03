import { useState } from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import Link from 'next/link'
import styles from '../../styles/Navigation.module.scss'

export const Navigation: React.FC = () => {
  const [selected, setSelected] = useState(0)

  const entries = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'About',
      href: '/about'
    },
    {
      label: 'Blog',
      href: '#'
    },
  ]

  return <nav className={styles.nav}>
    <ul
      className={styles.nav__menu}
    >
      {entries.map((entry, id) =>
        <motion.li className={`${styles.nav__cell} ${selected === id && styles['nav__cell-selected']}`} key={id}>
          <Link
            href={entry.href}
            legacyBehavior
          >
            <motion.a
              className={styles.nav__link}
              initial={{ color: '#fff' }}
              animate={{ color: selected === id ? '#09c' : '#111' }}
              transition={{ ease: 'linear', duration: 0.5, delay: 1 }}
              onClick={() => setSelected(id)}
            >
            {entry.label}
            </motion.a>
          </Link>
          {selected === id && <motion.div
            layoutId="underline"
            className={styles.nav__underline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'linear', duration: 0.5, delay: 2 }}
          />}
        </motion.li>)}
    </ul>
  </nav>
}
