import { Project } from '@/domain/Project'

const availableProjects: Project[] = [
  {
    name: 'node-api-boilerplate',
    description:
      'DDD/Clean Architecture inspired boilerplate for Node web APIs',
    stars: 2757,
    forks: 483,
    repository: 'https://github.com/talyssonoc/node-api-boilerplate',
  },
  {
    name: 'Structure',
    description:
      'A simple schema/attributes library built on top of modern JavaScript',
    stars: 295,
    forks: 27,
    repository: 'https://github.com/talyssonoc/structure',
  },
  {
    name: 'react-native-paper',
    description: 'Material Design for React Native (Android & iOS)',
    stars: 8570,
    forks: 1439,
    repository: 'https://github.com/callstack/react-native-paper',
  },
  {
    name: 'jest-native',
    description: '🦅 Custom jest matchers to test the state of React Native',
    stars: 251,
    forks: 27,
    repository: 'https://github.com/testing-library/jest-native',
  },
  {
    name: 'Ruby Marks',
    description: 'Ruby Marks',
    stars: 24,
    forks: 14,
    repository: 'https://github.com/ruby-marks/ruby-marks',
  },
  {
    name: 'Animavita',
    description:
      'Trigger life-saving alerts, register animals for adoption and find the closest pet friend to adopt 🐶',
    stars: 550,
    forks: 132,
    repository: 'https://github.com/animavita/animavita',
  },
]

const OtherProjects = () => {
  const getOtherProjects = async (): Promise<Project[]> => availableProjects

  return {
    getOtherProjects,
  }
}

export default OtherProjects
