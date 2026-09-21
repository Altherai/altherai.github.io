import Hero from '../components/Hero'
import TestGrid from '../components/TestGrid'
import MethodFlow from '../components/MethodFlow'
import CollaborationSection from '../components/CollaborationSection'

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="signal-strip" aria-label="ALTHERAI content pillars">
        <div>WARFRAME</div>
        <div>F2P PC</div>
        <div>GTX 1080 TESTS</div>
        <div>PROGRESSION</div>
        <div>REAL GAMEPLAY</div>
        <div>CREATOR TECH</div>
      </section>

      <section className="section section-lab">
        <div className="container">
          <div className="split-heading">
            <div>
              <div className="eyebrow">Current focus</div>
              <h2 className="section-title">Built around questions players actually ask.</h2>
            </div>
            <p className="section-intro">No synthetic benchmarks standing alone. No vague “worth it” verdicts without a test. The point is to show what happens on screen.</p>
          </div>

          <div className="pillar-grid">
            <article className="pillar pillar-featured">
              <span className="pillar-index">01</span>
              <div>
                <small>ANCHOR</small>
                <h3>Warframe</h3>
                <p>Farms, events, progression and practical tests for players who are not living in Steel Path.</p>
              </div>
            </article>
            <article className="pillar">
              <span className="pillar-index">02</span>
              <div>
                <small>DISCOVERY</small>
                <h3>Free-to-play PC</h3>
                <p>New and live-service games tested from the perspective of a normal returning or first-time player.</p>
              </div>
            </article>
            <article className="pillar">
              <span className="pillar-index">03</span>
              <div>
                <small>DIFFERENTIATOR</small>
                <h3>Real performance</h3>
                <p>GTX 1080 + Ryzen 5 3600 performance, including what changes when OBS is recording.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section latest-section">
        <div className="container">
          <div className="split-heading">
            <div>
              <div className="eyebrow">Latest field tests</div>
              <h2 className="section-title">Evidence first. Story second. No invented numbers.</h2>
            </div>
            <a className="text-link" href="https://www.youtube.com/@bugsbunny6251" target="_blank" rel="noreferrer">Open YouTube ↗</a>
          </div>
          <TestGrid compact />
        </div>
      </section>

      <section className="section method-section">
        <div className="container">
          <div className="split-heading">
            <div>
              <div className="eyebrow">The ALTHERAI method</div>
              <h2 className="section-title">Question → Test → Result</h2>
            </div>
            <p className="section-intro">Editing can amplify value. It cannot manufacture value. The test needs a visible payoff before the video does.</p>
          </div>
          <MethodFlow />
        </div>
      </section>

      <section className="section collab-section">
        <div className="container">
          <div className="split-heading">
            <div>
              <div className="eyebrow">For brands & publishers</div>
              <h2 className="section-title">Give the product a real test, not a generic shout-out.</h2>
            </div>
            <p className="section-intro">Hardware, peripherals and game access work best when they answer a concrete viewer question on the current test bench.</p>
          </div>
          <CollaborationSection />
        </div>
      </section>

      <section className="creator-cta">
        <div className="container creator-cta-inner">
          <div>
            <div className="eyebrow">ALTHERAI</div>
            <h2>Real games. Real hardware. Visible results.</h2>
            <p>Follow the next test on YouTube or get in touch for a focused collaboration.</p>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="https://www.youtube.com/@bugsbunny6251" target="_blank" rel="noreferrer">Visit Channel ↗</a>
            <a className="button ghost" href="mailto:alex.altherai@gmail.com">Contact Alex</a>
          </div>
        </div>
      </section>
    </>
  )
}
