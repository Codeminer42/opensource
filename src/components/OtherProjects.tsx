import {
  Container,
  Heading,
  Section,
  Grid,
  OtherProjectCard,
} from '@/components'
import { Project } from '@/domain/Project'

type OtherProjectsProps = {
  projects: Project[]
}

const OtherProjects = ({ projects }: OtherProjectsProps) => (
  <Section bg='gray.100' pb={['5', '6', '7']}>
    <Container>
      <Heading color='blue' fontSize={['5', '6', '7']}>
        Other Projects
      </Heading>

      <Grid
        gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']}
        gridGap='4'
        pt={['4', '4', '5']}
      >
        {projects.map((project) => (
          <OtherProjectCard key={project.name} project={project} />
        ))}
      </Grid>
    </Container>
  </Section>
)

export default OtherProjects
