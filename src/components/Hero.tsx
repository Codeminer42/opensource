import { Section, Container, Heading, Flex, Text } from '@/components'

const Hero = () => (
  <Section py={['5', '6', '7']}>
    <Container as={Flex} flexDirection='column'>
      <Heading mb='3' fontSize={['7', '8', '10']}>
        Open Source
      </Heading>

      <Heading as='q' fontSize={['6', '7', '8']} fontWeight='700' color='red'>
        In real open source, you have the right to control your own destiny
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
)

export default Hero
