import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HomePage from './HomePage'

test('shows the core promise and test bench', () => {
  render(<MemoryRouter><HomePage /></MemoryRouter>)
  expect(screen.getByRole('heading', { name: /play it\. test it\. show the result\./i })).toBeInTheDocument()
  expect(screen.getByText('Ryzen 5 3600')).toBeInTheDocument()
  expect(screen.getByText('GTX 1080 8GB')).toBeInTheDocument()
  expect(screen.getByText('Question')).toBeInTheDocument()
  expect(screen.getByText('Test')).toBeInTheDocument()
  expect(screen.getByText('Result')).toBeInTheDocument()
})
