import styles from './Services.module.css'

const SERVICES = [
  {
    title: 'Business Websites',
    desc: 'Modern websites designed to turn visitors into real customers for your business.',
  },
  {
    title: 'WhatsApp Integration',
    desc: 'Get direct enquiries from your website instantly through WhatsApp.',
  },
  {
    title: 'Fast Delivery',
    desc: 'Your website will be ready in just 2–3 days without delays.',
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.heading}>What We Do</h2>
        <p className={styles.sub}>
          Simple solutions to help your business get more customers.
        </p>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {SERVICES.map((s, i) => (
          <div key={i} className={styles.card}>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </div>

      {/* 🔥 CTA (NEW) */}
      <div className={styles.ctaBox}>
        <p className={styles.ctaText}>
          Ready to get your website?
        </p>

        <a
          href="https://wa.me/918111831107?text=Hi%20I%20want%20a%20website"
          className={styles.ctaBtn}
        >
          Get Free Demo
        </a>

        <p className={styles.trust}>
          ⚡ Free demo before payment • Delivered in 2–3 days
        </p>
      </div>

    </section>
  )
}