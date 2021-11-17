import GithubApiService from '@/services/githubApiService'
import ProjectsRepository from '@/repositories/projectsRepository'
import OtherProjectsRepository from '@/repositories/otherProjectsRepository'

const githubApiService = GithubApiService()
const projectsRepository = ProjectsRepository({ githubApiService })
const otherProjectsRepository = OtherProjectsRepository()

const container = {
  githubApiService,
  projectsRepository,
  otherProjectsRepository,
}

export default container
