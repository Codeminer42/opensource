import { Section, Container, Heading, Flex, Button, A } from '@/components'

const Careers = () => (
  <Section bg='blue'>
    <Container>
      <Heading color='white' fontSize={['7', '8', '9']} textAlign='center'>
        We are hiring new talents.
      </Heading>

      <Flex justifyContent='center' mt='4'>
        <Button as={A} href='https://www.codeminer42.com/careers'>
          Apply Now
        </Button>
      </Flex>
    </Container>
  </Section>
)

export default Careers
