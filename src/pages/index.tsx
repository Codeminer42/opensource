import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsResult,
} from 'next'
import Head from 'next/head'
import {
  Box,
  Careers,
  Footer,
  Header,
  Hero,
  Projects,
  OtherProjects,
} from '@/components'
import { Project } from '@/domain/Project'
import { getOtherProjects } from '@/repositories/otherProjectsRepository'
import container from '@/container'

type HomeProps = {
  projects: Project[]
  otherProjects: Project[]
}

const Home: NextPage<HomeProps> = ({ projects, otherProjects }) => {
  return (
    <>
      <Head>
        <title>Open Source - By Codeminer42</title>
        <meta
          name='description'
          content='Free and Open Source Software projects by Codeminer42'
        />
      </Head>

      <Header />

      <Box as='main'>
        <Hero />

        <Projects projects={projects} />

        <OtherProjects projects={otherProjects} />

        <Careers />
      </Box>

      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<HomeProps>
> => {
  const { projectsRepository } = container
  const projects = await projectsRepository.getProjects()
  const otherProjects = await getOtherProjects()

  return {
    props: {
      projects,
      otherProjects,
    },
  }
}

export default Home
