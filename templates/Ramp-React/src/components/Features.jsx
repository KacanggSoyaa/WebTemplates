import styles from './Features.module.css'

const BARS = [
  { label: 'Software',  width: '72%' },
  { label: 'Travel',    width: '48%' },
  { label: 'Marketing', width: '86%' },
  { label: 'Office',    width: '33%' },
]

export default function Features() {
  return (
    <section id="features" className={styles.section} aria-label="Features">
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.caption}>Why Ramp</p>
          <h2 className={styles.title}>Built to save you time and money</h2>
        </header>

        <div className={styles.row}>
          <div className={styles.copy}>
            <h3 className={styles.rowTitle}>Close the books 8x faster</h3>
            <p className={styles.text}>
              Receipts match themselves, policies enforce on their own, and every
              transaction lands in your ledger coded correctly. Month-end stops
              eating your week.
            </p>
            <a href="#pricing" className={styles.btnOutline}>Explore accounting</a>
          </div>
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardLabel}>Month-end close</span>
                <span className={styles.pill}>Auto-reconciled</span>
              </div>
              <div className={styles.cardRow}>
                <span>Receipts matched</span>
                <strong>1,284</strong>
              </div>
              <div className={styles.cardRow}>
                <span>Flagged for review</span>
                <strong>3</strong>
              </div>
              <div className={`${styles.cardRow} ${styles.accent}`}>
                <span>Time saved</span>
                <strong>26 hrs</strong>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.row} ${styles.reverse}`}>
          <div className={styles.copy}>
            <h3 className={styles.rowTitle}>Every dollar, accounted for</h3>
            <p className={styles.text}>
              Real-time spend controls, smart corporate cards, and automated
              approvals mean you see where money moves before it leaves — not
              after.
            </p>
            <a href="#pricing" className={styles.btnOutline}>Explore spend</a>
          </div>
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardLabel}>Spend controls</span>
                <span className={styles.pill}>Live</span>
              </div>
              {BARS.map(({ label, width }) => (
                <div key={label} className={styles.barLine}>
                  <span className={styles.barLabel}>{label}</span>
                  <span className={styles.track}>
                    <i style={{ width }} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
