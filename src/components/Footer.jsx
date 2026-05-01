import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        © 2026 <span className={styles.brand}>Aruvix Co</span>. All rights reserved.
      </div>
      <div className={styles.built}>Crafted with obsession</div>
    </footer>
  )
}
