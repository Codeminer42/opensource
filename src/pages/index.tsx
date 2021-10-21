import type { NextPage, GetStaticProps, GetStaticPropsResult } from 'next'
import Head from 'next/head'
import {
  Box,
  Careers,
  Container,
  Flex,
  Footer,
  Header,
  Heading,
  Projects,
  Section,
  Text,
} from '@/components'
import { Hacktoberfest } from '@/hacktoberfest'
import { Project } from '@/domain/Project'
import { getProjects } from '@/repositories/projectsRepository'

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
        <Section py={['5', '6', '7']}>
          <Container as={Flex} flexDirection='column'>
            <Heading mb='3' fontSize={['7', '8', '10']}>
              Open Source
            </Heading>

            <Heading
              as={Text}
              fontSize={['6', '7', '8']}
              fontWeight='700'
              color='red'
            >
              In real open source, you have the right to control your own
              destiny
            </Heading>

            <Heading
              as={Text}
              mt='3'
              ml='auto'
              fontSize={['5', '6']}
              fontWeight='700'
              color='red'
            >
              - Linus Torvalds
            </Heading>
          </Container>
        </Section>

        <Projects projects={projects} />

        <Hacktoberfest />

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

  return {
    props: {
      projects,
    },
  }
}

export default Home
