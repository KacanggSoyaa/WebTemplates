import styles from './Resources.module.css'

const RESOURCES = [
  {
    category: 'Guide',
    title: 'The month-end close checklist',
    text: 'A step-by-step playbook to cut reconciliation time without adding headcount.',
  },
  {
    category: 'Report',
    title: 'The state of corporate spend',
    text: 'Benchmarks from 30,000+ businesses on where budgets are really going.',
  },
  {
    category: 'Help center',
    title: 'Set up your first policy',
    text: 'Enforce spend rules automatically in a few minutes — no spreadsheets.',
  },
]

export default function Resources() {
  return (
    <section id="resources" className={styles.section} aria-label="Resources">
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.caption}>Resources</p>
          <h2 className={styles.title}>Guides, reports, and help</h2>
        </header>

        <div className={styles.grid}>
          {RESOURCES.map(({ category, title, text }) => (
            <article key={title} className={styles.card}>
              <span className={styles.category}>{category}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.text}>{text}</p>
              <a href="#" className={styles.link}>Read &rarr;</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
