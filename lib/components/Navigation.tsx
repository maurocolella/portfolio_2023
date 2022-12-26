import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from '../../styles/PageLayout.module.scss'

export const Navigation: React.FC = () => {
  return <nav className={styles.nav}>
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
      <li className={styles.nav__cell}>
        <a className={styles.nav__link} href="#">Blog</a>
      </li>
    </motion.ul>
  </nav>
}
