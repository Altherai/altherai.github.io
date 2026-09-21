import { useState } from 'react'
import { Link } from 'react-router-dom'
import { latestTestUrl } from '../data/tests'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className={`container nav${open ? ' open' : ''}`}>
        <Link className="brand" to="/" aria-label="ALTHERAI home"><span>ALTH</span>ERAI</Link>
        <nav id="primary-navigation" className="nav-links" aria-label="Primary navigation">
          <Link to="/tests" onClick={() => setOpen(false)}>Tests</Link>
          <Link to="/setup" onClick={() => setOpen(false)}>Setup</Link>
          <Link to="/brands" onClick={() => setOpen(false)}>For Brands</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
        <div className="nav-actions">
          <a className="button nav-watch" href={latestTestUrl} target="_blank" rel="noreferrer">Watch Latest ↗</a>
          <button className="mobile-toggle" aria-expanded={open} aria-controls="primary-navigation" aria-label="Toggle navigation" onClick={() => setOpen(v => !v)}>Menu</button>
        </div>
      </div>
    </header>
  )
}
