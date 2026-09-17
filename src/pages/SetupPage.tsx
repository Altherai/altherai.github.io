import TestBenchPanel from '../components/TestBenchPanel'
import { upgradeTests } from '../data/hardware'

export default function SetupPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Current setup</div>
          <h1 className="section-title">A normal-PC baseline built for useful comparisons.</h1>
          <p>The current bench stays intentionally grounded: Ryzen 5 3600, GTX 1080 8GB, 16GB RAM and OBS recording on Windows 11.</p>
        </div>
      </section>
      <section className="section">
        <div className="container setup-grid">
          <TestBenchPanel />
          <div className="panel">
            <h2>Upgrade Test Queue</h2>
            <p className="muted">These are editorial test slots, not a shopping wishlist.</p>
            <div className="queue">
              {upgradeTests.map(item => <div className="queue-item" key={item}>{item}</div>)}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
