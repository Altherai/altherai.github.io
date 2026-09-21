import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HomePage from './HomePage'

test('shows the core promise and current hardware context', () => {
  render(<MemoryRouter><HomePage /></MemoryRouter>)
  expect(screen.getByText(/play it\./i)).toBeInTheDocument()
  expect(screen.getByText('Ryzen 5 3600')).toBeInTheDocument()
  expect(screen.getByText('GTX 1080 8GB')).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Question' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Test' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Result' })).toBeInTheDocument()
})
