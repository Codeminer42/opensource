import type { NextPage, GetStaticProps, GetStaticPropsResult } from 'next'
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
import { getProjects } from '@/repositories/projectsRepository'
import { getOtherProjects } from '@/repositories/otherProjectsRepository'

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

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<HomeProps>
> => {
  const projects = await getProjects()
  const otherProjects = await getOtherProjects()

  return {
    props: {
      projects,
      otherProjects,
    },
  }
}

export default Home
