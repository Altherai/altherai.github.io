import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

test('renders the ALTHERAI application shell', () => {
  render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
  expect(screen.getByRole('heading', { name: /play it\.\s*test it\.\s*show the result\./i })).toBeInTheDocument()
})
