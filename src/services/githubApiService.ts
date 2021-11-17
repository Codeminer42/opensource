import { Octokit } from '@octokit/core'
import { Unpromise } from '@/types'

export type GithubApiService = ReturnType<typeof GithubApiService>

export type Repo = Unpromise<ReturnType<GithubApiService['getRepos']>>[0]

const GithubApiService = () => {
  const octokit = new Octokit()

  const getRepos = async () => {
    const response = await octokit.request('GET /orgs/{org}/repos', {
      org: 'codeminer42',
      type: 'all',
      per_page: 100,
    })

    const repos = response.data

    return repos
  }

  return {
    getRepos,
  }
}

export default GithubApiService
