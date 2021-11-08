import { Heading, Flex, Icon, Text, Button } from '@/components'
import { Project } from '@/domain/Project'

type OtherProjectCardProps = {
  project: Project
}

const OtherProjectCard = ({ project }: OtherProjectCardProps) => (
  <Flex
    p={['3', '4']}
    bg='white'
    flexDirection='column'
    justifyContent='space-between'
  >
    <Heading as='h3' fontSize={['5', '6']} fontStyle='normal' color='red'>
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

    <Text mt={['2', '2', '3']} fontSize='5' height={['95px', '115px']}>
      {project.description}
    </Text>

    <Flex mt={3} justifyContent='center'>
      <Button
        as='a'
        href={project.repository}
        target='_blank'
        rel='noopener noreferrer'
        textAlign='center'
      >
        Check Repository
      </Button>
    </Flex>
  </Flex>
)

export default OtherProjectCard
