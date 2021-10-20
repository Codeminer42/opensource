import {
  A,
  Button,
  Container,
  Flex,
  Footer,
  Header,
  Heading,
  Project,
  Section,
  Text,
} from '@/components'
import Box from '@/components/Box'
import Grid from '@/components/Grid'
import { Hacktoberfest } from '@/hacktoberfest'
import { Project as ProjectType } from '@/domain/Project'
import { getProjects } from '@/repositories/projectsRepository'
import type { NextPage, GetStaticProps, GetStaticPropsResult } from 'next'
import Head from 'next/head'

type HomeProps = {
  projects: ProjectType[]
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

        <Section bg='gray.100' pb={['5', '6', '7']}>
          <Container>
            <Heading color='blue' fontSize={['7', '8', '9']}>
              Projects
            </Heading>

            <Grid
              gridTemplateColumns={['1fr', '1fr', '1fr 1fr 1fr']}
              gridGap='4'
              pt={['4', '4', '5']}
            >
              {projects.map((info) => (
                <Project key={info.name} project={info} />
              ))}
            </Grid>
          </Container>
        </Section>

        <Hacktoberfest />

        <Section bg='blue'>
          <Container>
            <Heading
              color='white'
              fontSize={['7', '8', '9']}
              textAlign='center'
            >
              We are hiring new talents.
            </Heading>

            <Flex justifyContent='center' mt='4'>
              <Button as={A} href='https://www.codeminer42.com/careers'>
                Apply Now
              </Button>
            </Flex>
          </Container>
        </Section>
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
