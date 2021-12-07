import GithubApiService from '../githubApiService'
import { Octokit } from '@octokit/core'

jest.mock('@octokit/core')

// const Octokit2 = function() {
//   const request = async () => { ... }

//   return { request }
// }

// class Octokit3 {
//   async request() {
//     ...
//   }
// }

// mockOctokit()
const defaultRequest = async () => ({
  data: ['repo-1', 'repo-2', 'repo-3'],
})

const mockOctokit = ({ request = defaultRequest } = {}) => {
  const clazz = function () {
    return {
      request,
    }
  }

  Octokit.mockImplementation(clazz)
}

describe('GithubApiService', () => {
  describe('getRepos', () => {
    it('calls octokit.request with right parameters', async () => {
      const request = jest.fn(async () => ({
        data: ['repo-1', 'repo-2', 'repo-3'],
      }))
      mockOctokit({ request })
      const { getRepos } = GithubApiService()

      await getRepos()

      expect(request).toBeCalledWith('GET /orgs/{org}/repos', {
        org: 'codeminer42',
        type: 'all',
        per_page: 100,
      })
    })

    describe('when the request fulfilled', () => {
      it('returns repositories', async () => {
        mockOctokit()
        const { getRepos } = GithubApiService()

        const result = await getRepos()

        expect(result).toEqual(['repo-1', 'repo-2', 'repo-3'])
      })
    })

    describe('when the request fails', () => {
      it('throws an error', async () => {
        const request = jest.fn(async () => {
          throw new Error()
        })
        mockOctokit({ request })
        const { getRepos } = GithubApiService()

        await expect(getRepos()).rejects.toThrow()
      })
    })
  })
})
