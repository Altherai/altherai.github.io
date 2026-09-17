export type TestCategory = 'Warframe' | 'F2P / Live-Service' | 'Performance' | 'Progression'

export type TestItem = {
  slug: string
  game: string
  title: string
  categories: TestCategory[]
  summary: string
  url: string
  thumbnail: string
  thumbnailFallback: string
}

export const latestTestUrl = 'https://youtu.be/c8ufcdrEGOo'

export const tests: TestItem[] = [
  {
    slug: 'aniimo-gtx1080-obs',
    game: 'Aniimo',
    title: 'Can a GTX 1080 Run Aniimo at 1080p While Recording?',
    categories: ['F2P / Live-Service', 'Performance'],
    summary: 'A real 1080p gameplay test on the current Ryzen 5 3600 + GTX 1080 setup with recording overhead included.',
    url: 'https://youtu.be/c8ufcdrEGOo',
    thumbnail: 'https://i.ytimg.com/vi/c8ufcdrEGOo/maxresdefault.jpg',
    thumbnailFallback: 'https://i.ytimg.com/vi/c8ufcdrEGOo/hqdefault.jpg',
  },
  {
    slug: 'warframe-plague-star',
    game: 'Warframe',
    title: 'Is Plague Star Worth It Before Steel Path?',
    categories: ['Warframe', 'F2P / Live-Service', 'Progression'],
    summary: 'A practical event-value test focused on standing, time, rewards and non-Steel-Path accessibility.',
    url: 'https://youtu.be/jT1MqG4F8Mw',
    thumbnail: 'https://i.ytimg.com/vi/jT1MqG4F8Mw/maxresdefault.jpg',
    thumbnailFallback: 'https://i.ytimg.com/vi/jT1MqG4F8Mw/hqdefault.jpg',
  },
  {
    slug: 'warframe-orokin-cells',
    game: 'Warframe',
    title: 'I Tested 3 Orokin Cell Farms Before Steel Path — Here’s What Won',
    categories: ['Warframe', 'Progression'],
    summary: 'A direct comparison of accessible farming methods using recorded runs and observed results only.',
    url: 'https://youtu.be/fyY1KF6HXs0',
    thumbnail: 'https://i.ytimg.com/vi/fyY1KF6HXs0/maxresdefault.jpg',
    thumbnailFallback: 'https://i.ytimg.com/vi/fyY1KF6HXs0/hqdefault.jpg',
  },
]
