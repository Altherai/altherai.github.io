import { Link } from 'react-router-dom'
import { socialLinks } from '../data/socials'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <div>
          <div className="brand">ALTHERAI</div>
          <div>Practical F2P & live-service gaming tests for normal PC players.</div>
        </div>
        <div className="footer-links">
          {socialLinks.map(link => <a key={link.label} href={link.href}>{link.label}</a>)}
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
