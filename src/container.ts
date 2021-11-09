import GithubApiService from '@/services/githubApiService'
import ProjectsRepository from '@/repositories/projectsRepository'

const githubApiService = GithubApiService()
const projectsRepository = ProjectsRepository({ githubApiService })

const container = {
  githubApiService,
  projectsRepository,
}

export default container
