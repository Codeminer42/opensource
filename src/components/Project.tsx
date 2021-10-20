import { Box, Heading, Flex, Icon, Text, Button } from '@/components'
import { Project as ProjectType } from '@/domain/Project'

interface Props {
  project: ProjectType
}

const Project = ({ project }: Props) => (
  <Box p={['3', '4']} bg='white' key={1}>
    <Heading as='h3' fontSize={['6', '7']} fontStyle='normal' color='red'>
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
)

export default Project
