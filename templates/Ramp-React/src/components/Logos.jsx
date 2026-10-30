import styles from './Logos.module.css'

const COMPANIES = ['Northwind', 'Acme', 'Globex', 'Initech', 'Umbrella', 'Hooli']

export default function Logos() {
  return (
    <section className={styles.section} aria-label="Trusted by businesses">
      <div className={styles.inner}>
        <p className={styles.label}>Trusted by 30,000+ businesses</p>
        <div className={styles.grid}>
          {COMPANIES.map((name) => (
            <div key={name} className={styles.cell}>
              <span className={styles.name}>{name}</span>
            </div>
          ))}
          <div className={`${styles.cell} ${styles.pullquote}`}>
            <span className={styles.pullquoteValue}>7 mo</span>
            <span className={styles.pullquoteLabel}>average payback period</span>
          </div>
        </div>
      </div>
    </section>
  )
}
