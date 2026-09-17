import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import SiteHeader from './SiteHeader'

test('shows the essential navigation', () => {
  render(<MemoryRouter><SiteHeader /></MemoryRouter>)
  expect(screen.getByRole('link', { name: 'Tests' })).toHaveAttribute('href', '/tests')
  expect(screen.getByRole('link', { name: 'Setup' })).toHaveAttribute('href', '/setup')
  expect(screen.getByRole('link', { name: 'For Brands' })).toHaveAttribute('href', '/brands')
})

test('connects the mobile menu button to primary navigation', async () => {
  const user = userEvent.setup()
  render(<MemoryRouter><SiteHeader /></MemoryRouter>)

  const button = screen.getByRole('button', { name: /toggle navigation/i })
  const nav = screen.getByRole('navigation', { name: /primary navigation/i })

  expect(nav).toHaveAttribute('id', 'primary-navigation')
  expect(button).toHaveAttribute('aria-controls', 'primary-navigation')
  expect(button).toHaveAttribute('aria-expanded', 'false')

  await user.click(button)
  expect(button).toHaveAttribute('aria-expanded', 'true')
})
