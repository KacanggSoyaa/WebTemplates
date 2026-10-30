import styles from './Partners.module.css'

const PARTNERS = [
  { name: 'NetSuite',    category: 'Accounting'    },
  { name: 'QuickBooks',  category: 'Accounting'    },
  { name: 'Xero',        category: 'Accounting'    },
  { name: 'Slack',       category: 'Notifications' },
  { name: 'Okta',        category: 'SSO'           },
  { name: 'Salesforce',  category: 'CRM'           },
]

export default function Partners() {
  return (
    <section id="partners" className={styles.section} aria-label="Partners">
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.caption}>Partners</p>
          <h2 className={styles.title}>Works with the tools you already use</h2>
          <p className={styles.lead}>
            Sync Ramp with your accounting stack, identity provider, and the apps
            your team lives in — no rip-and-replace.
          </p>
        </header>

        <div className={styles.grid}>
          {PARTNERS.map(({ name, category }) => (
            <article key={name} className={styles.card}>
              <span className={styles.mark} aria-hidden="true">
                {name.charAt(0)}
              </span>
              <div className={styles.meta}>
                <span className={styles.name}>{name}</span>
                <span className={styles.category}>{category}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
