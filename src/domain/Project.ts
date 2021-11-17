export type Project = {
  name: string
  description: string
  stars: number
  forks: number
  repository: string
}

export type ProjectDTO = {
  name: string
  description: string | null
  stars?: number
  forks?: number
  repository: string
}

export const create = (project: ProjectDTO): Project => ({
  ...project,
  description: project.description ?? '',
  stars: project.stars ?? 0,
  forks: project.forks ?? 0,
})
