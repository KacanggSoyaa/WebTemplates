import styles from './Footer.module.css'

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Spend', href: '#features' },
      { label: 'Accounting', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Customers', href: '#testimonials' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Docs', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <a href="/" className={styles.logo} aria-label="Ramp home">Ramp</a>
          <p className={styles.note}>Demo template · Style reference build</p>
        </div>

        <nav className={styles.cols} aria-label="Footer">
          {COLUMNS.map(({ title, links }) => (
            <div key={title} className={styles.col}>
              <span className={styles.colTitle}>{title}</span>
              {links.map(({ label, href }) => (
                <a key={label} href={href} className={styles.link}>{label}</a>
              ))}
            </div>
          ))}
        </nav>
      </div>

      <div className={styles.inner}>
        <div className={styles.bottom}>
          <span className={styles.copy}>&copy; 2026 Ramp. Demo template.</span>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Privacy</a>
            <a href="#" className={styles.legalLink}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
