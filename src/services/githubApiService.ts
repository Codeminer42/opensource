import { Octokit } from '@octokit/core'

export type GithubApiService = ReturnType<typeof GithubApiService>

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
