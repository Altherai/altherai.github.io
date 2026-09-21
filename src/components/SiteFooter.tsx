import { Link } from 'react-router-dom'
import { socialLinks } from '../data/socials'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <div>
          <div className="brand"><span>ALTH</span>ERAI</div>
          <div className="footer-tagline">Warframe • F2P PC • real-world performance tests.</div>
        </div>
        <div className="footer-links">
          {socialLinks.map(link => <a key={link.label} href={link.href}>{link.label}</a>)}
          <Link to="/brands">For Brands</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
