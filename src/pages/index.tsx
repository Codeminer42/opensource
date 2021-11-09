import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsResult,
} from 'next'
import Head from 'next/head'
import { Box, Careers, Footer, Header, Hero, Projects } from '@/components'
import { Project } from '@/domain/Project'
import container from '@/container'

type HomeProps = {
  projects: Project[]
}

const Home: NextPage<HomeProps> = ({ projects }) => {
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

  return {
    props: {
      projects,
    },
  }
}

export default Home
