import styles from './About.module.css'

const POINTS = [
  '⚡ Fast delivery (2–3 days)',
  '💬 WhatsApp enquiry system',
  '💰 Affordable pricing',
  '📱 Mobile-first design',
]

export default function About() {
  return (
    <section id="about" className={styles.section}>

      <div className={styles.content}>

        <div className={styles.label}>Why Choose Us</div>

        <h2 className={styles.quote}>
          Simple websites that actually bring you customers
        </h2>

        <p className={styles.body}>
          We focus on what matters — helping your business get more enquiries
          through clean, fast, and conversion-focused websites.
        </p>

        <div className={styles.pills}>
          {POINTS.map(p => (
            <span key={p} className={styles.pill}>
              {p}
            </span>
          ))}
        </div>

      </div>

    </section>
  )
}