import { Project, ProjectDTO, create } from '@/domain/Project'
import { GithubApiService, Repo } from '@/services/githubApiService'

type Dependencies = {
  githubApiService: GithubApiService
}

const ProjectsRepository = ({ githubApiService }: Dependencies) => {
  const PROJECTS = ['cm42-central', 'Punchclock', 'marvin-cm42']

  const getProjects = async (): Promise<Project[]> => {
    const repos = await githubApiService.getRepos()

    const projects = repos
      .filter((repo) => PROJECTS.includes(repo.name))
      .map(repoToProjectDTO)
      .map(create)

    return projects
  }

  const repoToProjectDTO = (repo: Repo): ProjectDTO => ({
    name: repo.name,
    description: repo.description,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    repository: repo.html_url,
  })

  return {
    getProjects,
  }
}

export default ProjectsRepository
