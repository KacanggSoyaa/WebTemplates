import styles from './Ticker.module.css'

const METRICS = [
  { label: 'Agents at work today', value: '128,402' },
  { label: 'Expenses reviewed',    value: '4.2M'    },
  { label: 'Bills paid',           value: '$18.3B'  },
  { label: 'Hours saved',          value: '61,204'  },
  { label: 'Cards issued',         value: '942,118' },
]

function Group({ hidden = false }) {
  return (
    <div className={styles.group} aria-hidden={hidden || undefined}>
      {METRICS.map(({ label, value }) => (
        <div key={label} className={styles.item}>
          <span className={styles.label}>{label}</span>
          <span className={styles.value}>{value}</span>
        </div>
      ))}
    </div>
  )
}

export default function Ticker() {
  return (
    <section className={styles.strip} aria-label="Live platform metrics">
      <div className={styles.viewport}>
        <div className={styles.track}>
          <Group />
          <Group hidden />
        </div>
      </div>
    </section>
  )
}
