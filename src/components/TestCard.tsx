import type { TestItem } from '../data/tests'

export default function TestCard({ test }: { test: TestItem }) {
  return (
    <article className="test-card">
      <a href={test.url} target="_blank" rel="noreferrer" aria-label={`Open ${test.title} on YouTube`}>
        <div className="test-art"><span>{test.game.toUpperCase()}</span></div>
        <div className="test-body">
          <div className="test-meta">{test.categories.map(category => <span key={category}>{category}</span>)}</div>
          <h3>{test.title}</h3>
          <p className="muted">{test.summary}</p>
        </div>
      </a>
    </article>
  )
}
