import { contactEmail, socialLinks } from '../data/socials'

export default function ContactPage() {
  return (
    <section className="page-hero">
      <div className="container setup-grid">
        <div>
          <div className="eyebrow">Contact</div>
          <h1 className="section-title">Talk to ALTHERAI.</h1>
          <p>For review units, loaners, game keys, launch coverage or creator collaboration, use the email below.</p>
          <a className="button primary" href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </div>
        <div className="panel">
          <h2>Find ALTHERAI</h2>
          <div className="queue">
            {socialLinks.map(link => <a className="queue-item" key={link.label} href={link.href}>{link.label}</a>)}
          </div>
        </div>
      </div>
    </section>
  )
}
