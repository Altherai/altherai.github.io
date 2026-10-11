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

export const latestTestUrl = 'https://youtu.be/eiHaMlqoK14'

export const tests: TestItem[] = [
  {
    slug: 'aion2-first-impressions',
    game: 'AION 2',
    title: 'I Played AION 2 for 2.5 Hours… Here’s What Surprised Me',
    categories: ['F2P / Live-Service', 'Progression'],
    summary: 'An early AION 2 experience, focused on what actually surprised me during the first two and a half hours.',
    url: 'https://youtu.be/eiHaMlqoK14',
    thumbnail: 'https://i.ytimg.com/vi/eiHaMlqoK14/maxresdefault.jpg',
    thumbnailFallback: 'https://i.ytimg.com/vi/eiHaMlqoK14/hqdefault.jpg',
  },
  {
    slug: 'warframe-hallowed-nightmares-return',
    game: 'Warframe',
    title: 'Warframe Brought Back Hallowed Nightmares After Years — Is It Worth Doing?',
    categories: ['Warframe', 'F2P / Live-Service'],
    summary: 'A look at the returning Halloween event and whether it is worth playing.',
    url: 'https://youtu.be/eeHGNfXOGkA',
    thumbnail: 'https://i.ytimg.com/vi/eeHGNfXOGkA/maxresdefault.jpg',
    thumbnailFallback: 'https://i.ytimg.com/vi/eeHGNfXOGkA/hqdefault.jpg',
  },
  {
    slug: 'warframe-narin-unlock-normal-player',
    game: 'Warframe',
    title: 'I Tried Unlocking Narin as a Normal Player | Warframe',
    categories: ['Warframe', 'Progression'],
    summary: 'A normal-player attempt to unlock Narin, documenting the process and its actual outcome.',
    url: 'https://youtu.be/dvYMgt08Hzw',
    thumbnail: 'https://i.ytimg.com/vi/dvYMgt08Hzw/maxresdefault.jpg',
    thumbnailFallback: 'https://i.ytimg.com/vi/dvYMgt08Hzw/hqdefault.jpg',
  },
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
