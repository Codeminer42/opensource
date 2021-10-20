import {
  A,
  Button,
  Container,
  Flex,
  Footer,
  Header,
  Heading,
  Icon,
  Section,
  Text,
} from '@/components'
import Box from '@/components/Box'
import Grid from '@/components/Grid'
import { Hacktoberfest } from '@/hacktoberfest'
import { Project } from '@/domain/Project'
import { getProjects } from '@/repositories/projectsRepository'
import type { NextPage, GetStaticProps, GetStaticPropsResult } from 'next'
import Head from 'next/head'

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
              {projects.map((project) => (
                <Box p={['3', '4']} bg='white' key={project.repository}>
                  <Heading
                    as='h3'
                    fontSize={['6', '7']}
                    fontStyle='normal'
                    color='red'
                  >
                    {project.name}
                  </Heading>

                  <Flex mt='1'>
                    <Heading as='p' fontWeight='700' color='blue'>
                      <Flex as='span' alignItems='center'>
                        <Icon mr='1' name='star' color='blue' /> {project.stars}
                      </Flex>
                    </Heading>

                    <Heading as='p' fontWeight='700' color='blue' ml='3'>
                      <Flex as='span' alignItems='center'>
                        <Icon name='fork' color='blue' /> {project.forks}
                      </Flex>
                    </Heading>
                  </Flex>

                  <Text mt={['3', '3', '4']} height='95px'>
                    {project.description}
                  </Text>

                  <Flex mt={3} justifyContent='center'>
                    <Button
                      as='a'
                      href={project.repository}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Check Repository
                    </Button>
                  </Flex>
                </Box>
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
