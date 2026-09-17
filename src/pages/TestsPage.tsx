import TestGrid from '../components/TestGrid'

export default function TestsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Coverage</div>
          <h1 className="section-title">Tests, not generic impressions.</h1>
          <p>Browse ALTHERAI coverage by game and test type. Each concept starts with a concrete viewer question and ends with an observed result.</p>
        </div>
      </section>
      <section className="section">
        <div className="container"><TestGrid /></div>
      </section>
    </>
  )
}
