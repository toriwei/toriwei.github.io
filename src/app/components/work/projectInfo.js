const projectInfo = [
  {
    name: 'NWSLink',
    displayPhoto: './project-photos/nwslink-find-teammates.png',
    description:
      "A graph database that explores the club and teammate histories of players in the National Women's Soccer League. Extended to a web-based guessing game. Personal project.",
    links: [{ site: 'GitHub', url: 'https://github.com/toriwei/nwslink' }],
    date: 'Aug 2024 \u{2013} Present',
    techStack: [
      'Python',
      'Neo4j',
      'cypher',
      'Flask REST API',
      'Next.js',
      'Tailwind CSS',
      'mocha',
    ],
    photos: [
      './project-photos/nwslink-find-teammates.png',
      './project-photos/nwslink-game.png',
    ],
  },
  {
    name: 'The Living Archive',
    displayPhoto: './project-photos/tla-landing.png',
    description:
      'A crowdsourced archive to tell stories of the queer community at LMU. Equipped with an intuitive UI and interactive map to encourage discovery. Includes content management system for admin. Created for the LMU Senior Project classes.',
    links: [
      { site: 'GitHub', url: 'https://github.com/toriwei/the-living-archive' },
      { site: 'Website', url: 'https://the-living-archive.vercel.app/' },
    ],
    date: 'Aug 2023 \u{2013} Present',
    techStack: [
      'React',
      'Node',
      'Firebase',
      'Google Maps API',
      'Next.js',
      'Vercel',
    ],
    photos: [
      './project-photos/tla-landing.png',
      './project-photos/tla-map.png',
      './project-photos/tla-record.png',
    ],
  },

  {
    name: 'Squishi',
    displayPhoto: './project-photos/squishi-logo.png',
    description:
      'A programming language/compiler designed with efficiency, simplicity, and fun in mind. Features action-like keywords, hybrid typing, and loopis (a custom looping function). Created for Language & Automata II at LMU.',
    links: [
      { site: 'GitHub', url: 'https://github.com/BradyAmundson/Squishi' },
    ],
    date: 'Jan \u{2013} March 2023',
    techStack: ['JavaScript', 'Node.js', 'Ohm'],
    photos: [
      './project-photos/squishi-loops.png',
      './project-photos/squishi-prime.png',
    ],
  },

  {
    name: 'IEPordle',
    displayPhoto: './project-photos/iepordle-game.png',
    description:
      'A custom Wordle game adapted from an open-source repository. Encourages players to learn about Individualized Education Programs. Created for Undivided.',
    links: [
      { site: 'GitHub', url: 'https://github.com/toriwei/iepordle' },
      { site: 'Website', url: 'https://iepordle.web.app/' },
    ],
    date: 'Feb \u{2013} Jul 2022',
    techStack: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
    photos: [
      './project-photos/iepordle-game.png',
      './project-photos/iepordle-menu.png',
    ],
  },
  {
    name: 'Insighter',
    displayPhoto: './project-photos/insighter-landing.png',
    description:
      'A web-app that allows Spotify listeners to view their top artists and tracks in a colorful card format. Personal project.',
    links: [{ site: 'GitHub', url: 'https://github.com/toriwei/insighter' }],
    date: 'Jun \u{2013} Aug 2021',
    techStack: ['React', 'Node', 'Material Design', 'Spotify API'],
    photos: [
      './project-photos/insighter-landing.png',
      './project-photos/insighter-artists.png',
      './project-photos/insighter-tracks.png',
    ],
  },
]

export default projectInfo
