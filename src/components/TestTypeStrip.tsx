const items = [
  ['Performance Tests', 'Can normal or older hardware still run the game well enough to enjoy and record?'],
  ['Progression Tests', 'How far can a normal player realistically get with a clear, repeatable setup?'],
  ['Worth Your Time?', 'Does the grind, event or first-session experience actually justify the time?'],
]

export default function TestTypeStrip() {
  return (
    <div className="test-types">
      {items.map(([title, text]) => (
        <article className="test-type" key={title}>
          <h3>{title}</h3>
          <p className="muted">{text}</p>
        </article>
      ))}
    </div>
  )
}
