import styles from './Work.module.css'

const PROJECTS = [
  {
    title: "Fitness Club Website",
    desc: "Modern gym website with strong visuals and lead capture.",
    link: "https://nfit-club-m4mt.vercel.app/",
    image: "/gym1.png",

    tech: "React • Vite • Responsive",
  },
  {
    title: "Restaurant Website",
    desc: "Premium restaurant UI with menu, gallery and WhatsApp booking.",
    link: "https://velora-cafe-4knl.vercel.app/",
    image: "food1.png",
    tech: "React • Vite • WhatsApp Integration",
  },
]

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      
      <div className={styles.header}>
        <h2 className={styles.heading}>Our Works</h2>
        <p className={styles.sub}>
          Real websites built to attract and convert customers.
        </p>
      </div>

      <div className={styles.grid}>
        {PROJECTS.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >

            {/* Image */}
            <div className={styles.imageWrap}>
              <img src={p.image} alt={p.title} />
            </div>

            {/* Content */}
            <div className={styles.content}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className={styles.tech}>{p.tech}</span>

              <span className={styles.link}>
                View Live →
              </span>
            </div>

          </a>
        ))}
      </div>

    </section>
  )
}