import { Link } from 'react-router-dom'
import { latestTestUrl } from '../data/tests'

export default function Hero() {
  return (
    <section className="hero hero-lab">
      <div className="container hero-grid">
        <div className="hero-copy-block">
          <div className="eyebrow hero-kicker"><span className="live-dot" /> REAL GAME TESTS • NORMAL HARDWARE</div>
          <h1>Play it. <span>Test it.</span><br />Show the result.</h1>
          <p>ALTHERAI tests Warframe, free-to-play PC games and real performance on accessible hardware — using recorded gameplay, visible measurements and practical outcomes.</p>
          <div className="hero-actions">
            <a className="button primary" href={latestTestUrl} target="_blank" rel="noreferrer">Watch Latest Test ↗</a>
            <Link className="button ghost" to="/tests">Explore Tests</Link>
          </div>
          <div className="hero-proof">
            <span>Ryzen 5 3600</span>
            <span>GTX 1080 8GB</span>
            <span>16GB RAM</span>
            <span>OBS Recording</span>
          </div>
        </div>

        <div className="rig-scene" aria-label="ALTHERAI gaming test bench visualization">
          <div className="rig-glow" />
          <div className="rig-ring ring-a" />
          <div className="rig-ring ring-b" />
          <div className="rig-ring ring-c" />
          <div className="rig-core">
            <div className="rig-screen">
              <div className="rig-topbar">
                <span>ALTHERAI TEST LAB</span>
                <b>LIVE</b>
              </div>
              <div className="rig-title">REAL GAME TEST</div>
              <div className="rig-stat"><strong>1080p</strong><span>recorded gameplay</span></div>
              <div className="rig-bars"><i /><i /><i /><i /><i /></div>
              <div className="rig-footer"><span>FPS</span><span>VRAM</span><span>RAM</span><span>OBS</span></div>
            </div>
          </div>
          <div className="hud-card hud-one"><small>PRIMARY</small><strong>Warframe</strong><span>Question → Test → Result</span></div>
          <div className="hud-card hud-two"><small>BENCH</small><strong>GTX 1080</strong><span>Real-world baseline</span></div>
          <div className="hud-chip chip-a">F2P</div>
          <div className="hud-chip chip-b">PERFORMANCE</div>
        </div>
      </div>
      <div className="scroll-cue">SCROLL TO ENTER THE LAB</div>
    </section>
  )
}
