import styles from './Contact.module.css'

export default function Contact() {
  const phone = "918111831107"

  const getWhatsAppLink = (message) => {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="contact" className={styles.section}>

      <div className={styles.label}>Get Started</div>

      <h2 className={styles.headline}>
        Get your business website
        <br />
        in just <span className={styles.accentText}>2–3 days</span>
      </h2>

      <p className={styles.sub}>
        We build websites that help you get more customers through WhatsApp enquiries.
      </p>

      {/* Main CTA */}
      <a
        href={getWhatsAppLink(
          "Hi, I want a website for my business"
        )}
        className={styles.email}
      >
        💬 Chat on WhatsApp
      </a>

      {/* Secondary contact */}
      <p style={{ marginTop: "20px", opacity: 0.7 }}>
        or email: aruvixco@gmail.com
      </p>

      {/* Trust line */}
      <p style={{ marginTop: "10px", fontSize: "14px", opacity: 0.6 }}>
        ⚡ Free demo before you pay
      </p>

    </section>
  )
}