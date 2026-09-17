import { currentBench } from '../data/hardware'

export default function TestBenchPanel() {
  return (
    <aside className="bench" aria-label="Current test bench">
      <h2>Current Test Bench</h2>
      <div className="bench-list">
        {currentBench.map((item, index) => (
          <div className="bench-item" key={item}>
            <span>{item}</span>
            <span className="muted">{index < 3 ? 'baseline' : 'workflow'}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}
