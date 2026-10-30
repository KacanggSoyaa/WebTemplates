import styles from './Solutions.module.css'

const SOLUTIONS = [
  {
    title: 'Startups',
    text: 'Get a corporate card and automated expenses on day one — no finance hire required.',
  },
  {
    title: 'Mid-market',
    text: 'Close faster, enforce policy automatically, and give every team real-time spend visibility.',
  },
  {
    title: 'Enterprise',
    text: 'SSO, audit logs, and granular controls that scale across entities and currencies.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className={styles.section} aria-label="Solutions">
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.caption}>Solutions</p>
          <h2 className={styles.title}>Built for every stage</h2>
        </header>

        <div className={styles.grid}>
          {SOLUTIONS.map(({ title, text }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.text}>{text}</p>
              <a href="#pricing" className={styles.link}>Learn more &rarr;</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
