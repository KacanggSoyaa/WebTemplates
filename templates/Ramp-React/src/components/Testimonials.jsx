import styles from './Testimonials.module.css'

const TESTIMONIALS = [
  {
    quote:
      'We cut our close from ten days to two. The team finally has time for analysis instead of data entry.',
    name: 'Jordan Lee',
    role: 'VP Finance, Northwind',
    initials: 'JL',
  },
  {
    quote:
      'Ramp paid for itself in the first quarter. The controls alone stopped more waste than any audit we ran.',
    name: 'Maya Patel',
    role: 'Controller, Globex',
    initials: 'MP',
  },
  {
    quote:
      'Approvals used to live in email. Now they live where the spend happens, and nothing slips through.',
    name: 'Daniel Ruiz',
    role: 'CFO, Initech',
    initials: 'DR',
  },
  {
    quote:
      'The live counters are not marketing — that is genuinely how fast reimbursements move now.',
    name: 'Sarah Kim',
    role: 'Ops Lead, Hooli',
    initials: 'SK',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section} aria-label="Testimonials">
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.caption}>Customers</p>
          <h2 className={styles.title}>Loved by finance teams</h2>
        </header>
      </div>

      <div className={styles.scroll}>
        <div className={styles.track}>
          {TESTIMONIALS.map(({ quote, name, role, initials }) => (
            <article key={name} className={styles.card}>
              <p className={styles.quote}>&ldquo;{quote}&rdquo;</p>
              <div className={styles.person}>
                <span className={styles.avatar} aria-hidden="true">{initials}</span>
                <div>
                  <span className={styles.name}>{name}</span>
                  <span className={styles.role}>{role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
