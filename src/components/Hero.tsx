import { Link } from 'react-router-dom'
import { latestTestUrl } from '../data/tests'

export default function Hero() {
  return (
    <section className="hero hero-lab hero-2026">
      <div className="container hero-grid">
        <div className="hero-copy-block">
          <div className="eyebrow hero-kicker"><span className="live-dot" /> WARFRAME · AION 2 · REAL PC GAMING</div>
          <h1>Real gameplay.<br /><span>Real discoveries.</span></h1>
          <p>I'm ALTHERAI. I test what actually matters in Warframe, AION 2 and online PC games—from early progression to practical challenges—on a PC you don't need to spend a fortune on.</p>
          <div className="hero-actions">
            <a className="button primary" href={latestTestUrl} target="_blank" rel="noreferrer">Watch AION 2 episode ↗</a>
            <Link className="button ghost" to="/tests">Browse all videos →</Link>
          </div>
          <div className="hero-proof">
            <span>REAL FOOTAGE</span><span>NO INVENTED RESULTS</span><span>WARFRAME + AION 2</span><span>GTX 1080 TEST BENCH</span>
          </div>
        </div>
        <div className="featured-video">
          <a href={latestTestUrl} target="_blank" rel="noreferrer" className="featured-video-link" aria-label="Watch I Played AION 2 for 2.5 Hours on YouTube">
            <div className="featured-video-art">
              <img src="https://i.ytimg.com/vi/eiHaMlqoK14/hqdefault.jpg" alt="Actual AION 2 gameplay video thumbnail" />
              <span className="featured-play" aria-hidden="true">▶</span>
              <span className="featured-corner">FEATURED VIDEO · AION 2</span>
            </div>
            <div className="featured-video-info">
              <div><small>FIRST IMPRESSIONS</small><h2>I Played AION 2 for 2.5 Hours… Here's What Surprised Me</h2></div>
              <span className="featured-arrow" aria-hidden="true">↗</span>
            </div>
          </a>
          <div className="featured-under"><span>ALTHERAI FIELD NOTES / 2026</span><span>REAL TESTS. HONEST VERDICTS.</span></div>
        </div>
      </div>
    </section>
  )
}
