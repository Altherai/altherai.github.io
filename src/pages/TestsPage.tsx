import TestGrid from '../components/TestGrid'

export default function TestsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Coverage</div>
          <h1 className="section-title">Watch the latest ALTHERAI videos.</h1>
          <p>Warframe events, AION 2 first impressions, progression experiments and real PC performance. Filter by topic and jump straight to the footage.</p>
        </div>
      </section>
      <section className="section">
        <div className="container"><TestGrid /></div>
      </section>
    </>
  )
}
