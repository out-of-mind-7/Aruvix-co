import styles from './Work.module.css'

const PROJECTS = [
  {
    title: "Fitness Club Website",
    desc: "Modern gym website with strong visuals and lead capture.",
  },
  {
    title: "Restaurant Landing Page",
    desc: "Clean food ordering experience with WhatsApp integration.",
  },
  {
    title: "Local Business Website",
    desc: "Simple website designed to convert visitors into enquiries.",
  },
]

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      
      <div className={styles.header}>
        <h2 className={styles.heading}>Our Work</h2>
        <p className={styles.sub}>
          A few examples of websites we can build for your business.
        </p>
      </div>

      <div className={styles.grid}>
        {PROJECTS.map((p, i) => (
          <div key={i} className={styles.card}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href="#" className={styles.link}>View Demo →</a>
          </div>
        ))}
      </div>

    </section>
  )
}