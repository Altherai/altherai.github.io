import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SiteHeader from './SiteHeader'

test('shows the essential navigation', () => {
  render(<MemoryRouter><SiteHeader /></MemoryRouter>)
  expect(screen.getByRole('link', { name: 'Tests' })).toHaveAttribute('href', '/tests')
  expect(screen.getByRole('link', { name: 'Setup' })).toHaveAttribute('href', '/setup')
  expect(screen.getByRole('link', { name: 'For Brands' })).toHaveAttribute('href', '/brands')
})
