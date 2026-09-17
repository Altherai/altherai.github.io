const steps = [
  ['01', 'Question', 'Start with a concrete viewer problem that can be answered on screen.'],
  ['02', 'Test', 'Use real gameplay, the documented test bench and a small reproducible method.'],
  ['03', 'Result', 'Show the measured or directly observed outcome without inventing certainty.'],
]

export default function MethodFlow() {
  return (
    <div className="method">
      {steps.map(([number, title, text]) => (
        <div className="method-step" key={title}>
          <div className="method-num">{number}</div>
          <h3>{title}</h3>
          <p className="muted">{text}</p>
        </div>
      ))}
    </div>
  )
}
