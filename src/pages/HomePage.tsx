import Hero from '../components/Hero'
import TestTypeStrip from '../components/TestTypeStrip'
import TestGrid from '../components/TestGrid'
import MethodFlow from '../components/MethodFlow'
import CollaborationSection from '../components/CollaborationSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="container">
          <div className="eyebrow">What gets tested</div>
          <h2 className="section-title">Useful questions, small tests, visible outcomes.</h2>
          <TestTypeStrip />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="eyebrow">Latest tests</div>
          <h2 className="section-title">Real coverage from the current bench.</h2>
          <TestGrid compact />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="eyebrow">Method</div>
          <h2 className="section-title">Question → Test → Result</h2>
          <MethodFlow />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="eyebrow">For brands & publishers</div>
          <h2 className="section-title">Put the product into a test that viewers can understand.</h2>
          <CollaborationSection />
        </div>
      </section>
    </>
  )
}
