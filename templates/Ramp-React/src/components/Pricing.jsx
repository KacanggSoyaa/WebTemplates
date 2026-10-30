import styles from './Pricing.module.css'

const PLANS = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    features: ['Unlimited cards', 'Automated receipts', 'Basic spend controls'],
    cta: 'Get started',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$15',
    period: '/ user / mo',
    features: [
      'Everything in Starter',
      'Accounting automation',
      'Advanced policies',
      'Priority support',
    ],
    cta: 'Start free trial',
    featured: true,
    badge: 'Most popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Everything in Growth', 'SSO & audit log', 'Dedicated success'],
    cta: 'Contact sales',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section} aria-label="Pricing">
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.caption}>Pricing</p>
          <h2 className={styles.title}>Free to start, priced to scale</h2>
        </header>

        <div className={styles.grid}>
          {PLANS.map(({ name, price, period, features, cta, featured, badge }) => (
            <article
              key={name}
              className={`${styles.card} ${featured ? styles.featured : ''}`}
            >
              {badge && <span className={styles.badge}>{badge}</span>}
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.price}>
                {price}
                {period && <span className={styles.period}>{period}</span>}
              </p>
              <ul className={styles.features}>
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a
                href="#"
                className={`${styles.cta} ${featured ? styles.ctaPrimary : styles.ctaOutline}`}
              >
                {cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
