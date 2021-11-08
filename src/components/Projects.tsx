import { Container, Heading, Section, Grid, ProjectCard } from '@/components'
import { Project } from '@/domain/Project'

type ProjectsProps = {
  projects: Project[]
}

const Projects = ({ projects }: ProjectsProps) => (
  <Section bg='gray.100'>
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
          <ProjectCard key={project.name} project={project} />
        ))}
      </Grid>
    </Container>
  </Section>
)

export default Projects
