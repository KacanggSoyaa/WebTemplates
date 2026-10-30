import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Products',   href: '#features' },
  { label: 'Partners',   href: '#partners' },
  { label: 'Solutions',  href: '#solutions' },
  { label: 'Resources',  href: '#resources' },
  { label: 'Customers',  href: '#testimonials' },
  { label: 'Pricing',    href: '#pricing' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <nav
      id="site-nav"
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      aria-label="Main navigation"
    >
      <div className={styles.inner}>
        {/* Logo */}
        <a href="/" className={styles.logo} aria-label="Ramp home">
          Ramp
        </a>

        {/* Desktop links */}
        <ul className={styles.links} role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className={styles.actions}>
          <a href="#" className={styles.signIn}>Sign in</a>
          <a href="#" className={styles.demo}>See a demo</a>
        </div>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="nav-mobile"
          onClick={() => setMobileOpen(o => !o)}
        >
          <span className={mobileOpen ? styles.lineOpen1 : ''} />
          <span className={mobileOpen ? styles.lineOpen2 : ''} />
          <span className={mobileOpen ? styles.lineOpen3 : ''} />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div id="nav-mobile" className={styles.mobile} aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className={styles.mobileLink} onClick={closeMobile}>
              {label}
            </a>
          ))}
          <div className={styles.mobileActions}>
            <a href="#" className={styles.signIn} onClick={closeMobile}>Sign in</a>
            <a href="#" className={styles.demo} onClick={closeMobile}>See a demo</a>
          </div>
        </div>
      )}
    </nav>
  )
}
