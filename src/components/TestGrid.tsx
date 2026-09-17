import { useMemo, useState } from 'react'
import { tests, type TestCategory } from '../data/tests'
import TestCard from './TestCard'

const filters: Array<'All' | TestCategory> = ['All', 'Warframe', 'F2P / Live-Service', 'Performance', 'Progression']

export default function TestGrid({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<'All' | TestCategory>('All')
  const visible = useMemo(() => {
    const base = active === 'All' ? tests : tests.filter(test => test.categories.includes(active))
    return compact ? base.slice(0, 3) : base
  }, [active, compact])

  return (
    <>
      {!compact && (
        <div className="filter-row" aria-label="Test filters">
          {filters.map(filter => (
            <button key={filter} className={`filter${active === filter ? ' active' : ''}`} onClick={() => setActive(filter)}>{filter}</button>
          ))}
        </div>
      )}
      <div className="test-grid">
        {visible.map(test => <TestCard key={test.slug} test={test} />)}
      </div>
    </>
  )
}
