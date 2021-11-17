import ProjectsRepository from '../projectsRepository';

describe('ProjectsRepository', () => {
  describe('getProjects', () => {
    it('calls the getRepo with no parameter', async () => {
      const getRepos = jest.fn(() => Promise.resolve([]));
      const githubApiService = {
        getRepos,
      }

      const { getProjects } = ProjectsRepository({ githubApiService })

      await getProjects();

      expect(getRepos).toBeCalledWith();
    })

    it('must filter the projects', async () => {
      const getRepos = jest.fn(() => Promise.resolve([
        { name: 'cm42-central', description: 'a', html_url: 'url' },
        { name: 'Punchclock', description: 'a', html_url: 'url' },
        { name: 'exemplo', description: 'a', html_url: 'url' },
      ]));

      const githubApiService = {
        getRepos,
      }

      const { getProjects } = ProjectsRepository({ githubApiService })

      const projects = await getProjects();

      const result = [
        { name: 'Punchclock', description: 'a', repository: 'url' },
        { name: 'cm42-central', description: 'a', repository: 'url' },
      ]

      expect(projects).toEqual(
        expect.arrayContaining(result)
      );

      expect(projects).toHaveLength(2);
    })

    it('must return the projects in the right structure', async () => {
      const getRepos = jest.fn(() => Promise.resolve([
        { name: 'cm42-central', description: 'a', html_url: 'url', stargazers_count: 1, forks_count: 0, random_prop: 'alo' },
      ]));

      const githubApiService = {
        getRepos,
      }

      const { getProjects } = ProjectsRepository({ githubApiService })

      const projects = await getProjects();

      expect(projects).toEqual([{ name: 'cm42-central', description: 'a', repository: 'url', stars: 1, forks: 0 }])
    });
  });
});
