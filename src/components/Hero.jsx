import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      
      {/* Label */}
      <div className={styles.label}>Aruvix Co — Web Solutions</div>

      {/* Headline */}
      <h1 className={styles.headline}>
        <span className={styles.line}>Get more customers</span>
        <span className={`${styles.line} ${styles.accent}`}>with a website</span>
        <span className={`${styles.line} ${styles.stroke}`}>that converts.</span>
      </h1>

      {/* Subtext */}
      <p className={styles.sub}>
        We build fast, mobile-friendly websites with WhatsApp integration 
        to turn visitors into real enquiries for your business.
      </p>

      {/* Actions */}
      <div className={styles.actions}>
        
        <a
          href="https://wa.me/918111831107?text=Hi%20I%20want%20a%20website"
          className={styles.btnPrimary}
        >
          Get Free Demo
        </a>

        <a href="#work" className={styles.btnGhost}>
          View Demo
        </a>

      </div>

      <div className={styles.meta}>
      <span>⚡ Delivered in 2–3 days</span>
      <span>💬 WhatsApp enquiry system</span>
      <span>💰 Affordable pricing</span>
      </div>

    </section>
  )
}