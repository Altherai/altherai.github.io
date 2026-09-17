import { fireEvent, render, screen } from '@testing-library/react'
import TestCard from './TestCard'
import type { TestItem } from '../data/tests'

const testItem: TestItem = {
  slug: 'aniimo-gtx1080-obs',
  game: 'Aniimo',
  title: 'Can a GTX 1080 Run Aniimo at 1080p While Recording?',
  categories: ['F2P / Live-Service', 'Performance'],
  summary: 'Real gameplay test.',
  url: 'https://youtu.be/c8ufcdrEGOo',
  thumbnail: 'https://i.ytimg.com/vi/c8ufcdrEGOo/maxresdefault.jpg',
  thumbnailFallback: 'https://i.ytimg.com/vi/c8ufcdrEGOo/hqdefault.jpg',
}

test('renders the real YouTube thumbnail and video link', () => {
  render(<TestCard test={testItem} />)

  const link = screen.getByRole('link', { name: /open can a gtx 1080 run aniimo/i })
  const image = screen.getByRole('img', { name: /aniimo video thumbnail/i })

  expect(link).toHaveAttribute('href', 'https://youtu.be/c8ufcdrEGOo')
  expect(image).toHaveAttribute('src', 'https://i.ytimg.com/vi/c8ufcdrEGOo/maxresdefault.jpg')
})

test('falls back to the standard YouTube thumbnail when max resolution fails', () => {
  render(<TestCard test={testItem} />)
  const image = screen.getByRole('img', { name: /aniimo video thumbnail/i })

  fireEvent.error(image)

  expect(image).toHaveAttribute('src', 'https://i.ytimg.com/vi/c8ufcdrEGOo/hqdefault.jpg')
})
