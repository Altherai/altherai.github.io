import CollaborationSection from '../components/CollaborationSection'
import TestBenchPanel from '../components/TestBenchPanel'
import { contactEmail } from '../data/socials'

export default function BrandsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">For brands & publishers</div>
          <h1 className="section-title">Put your hardware or game through a real-world test.</h1>
          <p>ALTHERAI builds practical coverage around a clear viewer question, a documented test setup and an observable result. Provided products, loaners and keys are disclosed; editorial results remain independent.</p>
        </div>
      </section>
      <section className="section">
        <div className="container"><CollaborationSection /></div>
      </section>
      <section className="section">
        <div className="container setup-grid">
          <div className="panel">
            <h2>What a collaboration can include</h2>
            <ul>
              <li>One long-form real-world test</li>
              <li>One or two Shorts when the footage supports them</li>
              <li>Benchmark/result screenshots when relevant</li>
              <li>Clearly disclosed product, key or tracked-link support</li>
            </ul>
            <p className="muted">No positive-review guarantee, view guarantee or sales guarantee.</p>
            <a className="button primary" href={`mailto:${contactEmail}`}>Contact ALTHERAI</a>
          </div>
          <TestBenchPanel />
        </div>
      </section>
    </>
  )
}
