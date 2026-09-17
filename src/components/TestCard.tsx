import type { TestItem } from '../data/tests'

export default function TestCard({ test }: { test: TestItem }) {
  return (
    <article className="test-card">
      <a className="test-card-link" href={test.url} target="_blank" rel="noreferrer" aria-label={`Open ${test.title} on YouTube`}>
        <div className="test-art">
          <img
            src={test.thumbnail}
            alt={`${test.game} video thumbnail`}
            loading="lazy"
            decoding="async"
            onError={(event) => {
              const image = event.currentTarget
              if (image.src !== test.thumbnailFallback) image.src = test.thumbnailFallback
            }}
          />
          <span className="test-art-label">{test.game.toUpperCase()}</span>
          <span className="test-watch-hint" aria-hidden="true">Watch on YouTube ↗</span>
        </div>
        <div className="test-body">
          <div className="test-meta">{test.categories.map(category => <span key={category}>{category}</span>)}</div>
          <h3>{test.title}</h3>
          <p className="muted">{test.summary}</p>
        </div>
      </a>
    </article>
  )
}
