import { Project } from '@/domain/Project'

const availableProjects: Project[] = [
  {
    name: 'Central',
    description:
      'Fork and Evolution of the Fulcrum project - An agile project planning tool and Pivotal Tracker drop-in replacement',
    stars: 284,
    forks: 59,
    repository: 'https://github.com/Codeminer42/cm42-central',
  },
  {
    name: 'Punchclock',
    description:
      'A simple electronic punch clock to track hours spent on projects',
    stars: 16,
    forks: 11,
    repository: 'https://github.com/Codeminer42/Punchclock',
  },
  {
    name: 'Marvin',
    description: 'Marvin is a chat bot built on the Hubot framework',
    stars: 6,
    forks: 3,
    repository: 'https://github.com/Codeminer42/marvin-cm42',
  },
]

export const getProjects = async (): Promise<Project[]> => availableProjects
