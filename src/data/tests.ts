export type TestCategory = 'Warframe' | 'F2P / Live-Service' | 'Performance' | 'Progression'

export type TestItem = {
  slug: string
  game: string
  title: string
  categories: TestCategory[]
  summary: string
  url: string
}

export const latestTestUrl = 'https://www.youtube.com/@bugsbunny6251'

export const tests: TestItem[] = [
  {
    slug: 'aniimo-gtx1080-obs',
    game: 'Aniimo',
    title: 'Can a GTX 1080 still handle Aniimo while OBS records?',
    categories: ['F2P / Live-Service', 'Performance'],
    summary: 'A real 1080p gameplay test on the current Ryzen 5 3600 + GTX 1080 setup with recording overhead included.',
    url: latestTestUrl,
  },
  {
    slug: 'warframe-plague-star',
    game: 'Warframe',
    title: 'Is Plague Star worth doing before Steel Path?',
    categories: ['Warframe', 'F2P / Live-Service', 'Progression'],
    summary: 'A practical event-value test focused on standing, time, rewards and non-Steel-Path accessibility.',
    url: latestTestUrl,
  },
  {
    slug: 'warframe-orokin-cells',
    game: 'Warframe',
    title: 'Which beginner Orokin Cell farm actually worked best?',
    categories: ['Warframe', 'Progression'],
    summary: 'A direct comparison of accessible farming methods using recorded runs and observed results only.',
    url: latestTestUrl,
  },
]
