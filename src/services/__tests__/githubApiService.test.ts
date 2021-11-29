import GithubApiService from '../githubApiService'
import { Octokit } from '@octokit/core'

// jest.mock('@octokit/core', () => {
//   const Octokit = function () {
//     const request = jest.fn(async () => ({
//       data: [],
//     }))

//     return {
//       request,
//     }
//   }

//   return { Octokit }
// })

jest.mock('@octokit/core')

describe('GithubApiService', () => {
  describe('getRepos', () => {
    let request

    beforeEach(() => {
      request = jest.fn(async () => ({
        data: ['repo-1', 'repo-2', 'repo-3'],
      }))

      Octokit.mockImplementation(function () {
        return {
          request,
        }
      })
    })

    it('calls octokit.request with right parameters', async () => {
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
        const { getRepos } = GithubApiService()

        const result = await getRepos()

        expect(result).toEqual(['repo-1', 'repo-2', 'repo-3'])
      })
    })

    describe('when the request fails', () => {
      it('throws an error', () => {})
    })
  })
})
