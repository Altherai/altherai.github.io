import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="eyebrow">404</div>
        <h1 className="section-title">That test page does not exist.</h1>
        <p>The link may be old or the page may have moved.</p>
        <Link className="button primary" to="/">Back to ALTHERAI</Link>
      </div>
    </section>
  )
}
