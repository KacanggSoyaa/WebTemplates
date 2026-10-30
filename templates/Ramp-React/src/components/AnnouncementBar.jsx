import { useState } from 'react'
import styles from './AnnouncementBar.module.css'

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className={styles.bar} role="banner">
      <p className={styles.content}>
        Ramp raises $150M Series D at a $7.65B valuation —{' '}
        <a href="#" aria-label="Learn more about Ramp Series D">
          Learn more
        </a>
      </p>
      <button
        className={styles.close}
        aria-label="Dismiss announcement"
        onClick={() => setDismissed(true)}
      >
        &#x2715;
      </button>
    </div>
  )
}
