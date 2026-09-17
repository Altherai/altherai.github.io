import { Link } from 'react-router-dom'
import { latestTestUrl } from '../data/tests'
import TestBenchPanel from './TestBenchPanel'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <h1>Real-World PC Gaming Tests for Normal Players</h1>
          <p>Real gameplay, real hardware and measured results — focused on free-to-play, live-service and practical PC performance.</p>
          <div className="hero-actions">
            <a className="button primary" href={latestTestUrl} target="_blank" rel="noreferrer">Watch Latest Test</a>
            <Link className="button ghost" to="/brands">Work With ALTHERAI</Link>
          </div>
        </div>
        <TestBenchPanel />
      </div>
    </section>
  )
}
