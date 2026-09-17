import { Link } from 'react-router-dom'

export default function CollaborationSection() {
  return (
    <div className="collab">
      <article className="panel">
        <h3>Hardware</h3>
        <p className="muted">Review units or loaners that create a measurable before/after test.</p>
        <ul>
          <li>Gaming laptops and mini-PCs</li>
          <li>GPUs</li>
          <li>1440p / high-refresh monitors</li>
          <li>SSDs, storage and RAM/platform upgrades</li>
        </ul>
      </article>
      <article className="panel">
        <h3>Games & Publishers</h3>
        <p className="muted">Coverage built around a specific viewer question, not generic promotion.</p>
        <ul>
          <li>Review keys and early access</li>
          <li>Launch performance coverage</li>
          <li>First-session and progression tests</li>
          <li>Real-world PC performance with OBS</li>
        </ul>
        <Link className="button ghost" to="/brands">See collaboration details</Link>
      </article>
    </div>
  )
}
