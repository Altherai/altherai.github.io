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
        <div>AION 2 · CHANTER</div>
        <div>F2P PC</div>
        <div>GTX 1080 TESTS</div>
        <div>PROGRESSION</div>
        <div>REAL GAMEPLAY</div>
        
      </section>

      <section className="section section-lab">
        <div className="container">
          <div className="split-heading">
            <div>
              <div className="eyebrow">What I cover</div>
              <h2 className="section-title">Games worth exploring. Questions worth answering.</h2>
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
                <h3>AION 2 &amp; other online worlds</h3>
                <p>Following my Chanter from first impressions into leveling, new abilities and eventual group play. New and live-service games remain part of the mix.</p>
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
              <div className="eyebrow">Recently on the channel</div>
              <h2 className="section-title">The latest videos. No filler.</h2>
            </div>
            <a className="text-link" href="https://www.youtube.com/@bugsbunny6251" target="_blank" rel="noreferrer">Open YouTube ↗</a>
          </div>
          <TestGrid compact />
        </div>
      </section>

      <section className="section section-lab" aria-label="AION 2 progression series">
        <div className="container">
          <div className="split-heading">
            <div>
              <div className="eyebrow">Ongoing series · AION 2</div>
              <h2 className="section-title">AION 2: the Chanter journey</h2>
            </div>
            <p className="section-intro">I switched from Spiritmaster to Chanter because the support playstyle interested me. Its mobility surprised me. Next I'm leveling it to see what new abilities and real group play bring. The first episode is under private review; it isn't publicly available yet.</p>
          </div>
          <div className="pillar-grid">
            <article className="pillar"><span className="pillar-index">01</span><div><small>FIRST IMPRESSIONS</small><h3>The class switch</h3><p>Why I decided to keep playing Chanter. Episode recorded; currently in private review.</p></div></article>
            <article className="pillar"><span className="pillar-index">02</span><div><small>UP NEXT</small><h3>Leveling Chanter</h3><p>New skills, progression and how the class actually feels after more time.</p></div></article>
            <article className="pillar"><span className="pillar-index">03</span><div><small>FUTURE TEST</small><h3>Group support</h3><p>Healing and party utility, only after suitable content is accessible and recorded.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section method-section">
        <div className="container">
          <div className="split-heading">
            <div>
              <div className="eyebrow">The ALTHERAI method</div>
              <h2 className="section-title">Question → Test → Result</h2>
            </div>
            <p className="section-intro">Editing can amplify value, but never manufacture it. ALTHERAI pairs evidence-led stories with natural narration, readable Shorts and clear follow-ups. Each episode earns its runtime.</p>
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
