import { useRef } from 'react'
import styles from './Hero.module.css'

function ProductMockup() {
  return (
    <div className={styles.mockup} aria-hidden="true">
      {/* Browser chrome */}
      <div className={styles.mockupBar}>
        <span className={`${styles.dot} ${styles.dotRed}`}   />
        <span className={`${styles.dot} ${styles.dotYellow}`}/>
        <span className={`${styles.dot} ${styles.dotGreen}`} />
        <span className={styles.mockupTitle}>Ramp Dashboard</span>
      </div>

      {/* Spend summary card */}
      <div className={styles.summaryCard}>
        <p className={styles.summaryLabel}>Total Spend This Month</p>
        <p className={styles.summaryStat}>
          $248,430 <span>/ $500,000</span>
        </p>
        <span className={styles.savingsBadge}>↓ 12% vs last month</span>
      </div>

      {/* Transaction rows */}
      {[
        { name: 'AWS · SaaS',     amount: '$4,200', status: 'Approved', approved: true  },
        { name: 'Figma · Design', amount: '$840',   status: 'Approved', approved: true  },
        { name: 'Delta · Travel', amount: '$1,240',  status: 'Review',   approved: false },
      ].map(({ name, amount, status, approved }) => (
        <div key={name} className={styles.txRow}>
          <span className={styles.txName}>{name}</span>
          <span className={styles.txAmount}>{amount}</span>
          <span className={`${styles.txBadge} ${approved ? styles.txBadgeOn : styles.txBadgeOff}`}>
            {status}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  const emailRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // no-op for static template
  }

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.inner}>
        {/* ── Left: copy ── */}
        <div className={styles.content}>
          <h1 className={styles.headline}>
            The finance platform that helps companies spend less
          </h1>
          <p className={styles.subheadline}>
            From corporate cards to expense management and bill pay — Ramp
            replaces your entire finance stack.
          </p>

          <form className={styles.ctaRow} onSubmit={handleSubmit} noValidate>
            <label htmlFor="hero-email" className="sr-only">Work email</label>
            <input
              id="hero-email"
              ref={emailRef}
              type="email"
              className={styles.emailInput}
              placeholder="Work email"
              autoComplete="email"
            />
            <button type="submit" className={styles.btnPrimary}>
              Get started for free
            </button>
          </form>
          <a href="#" className={styles.demoLink}>See a demo →</a>
        </div>

        {/* ── Right: product visual ── */}
        <div className={styles.visual}>
          <ProductMockup />
        </div>
      </div>
    </section>
  )
}
