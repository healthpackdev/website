import { Container } from '@chakra-ui/react';
import HeroAbout from '@components/containers/Hero/hero-about'; // @containers/Hero/hero-about or @containers/hero-about

const Hero: React.FC = () => (
  <Container
    as="section"
    maxW="container.lg"
    borderRadius="md"
    // px={{ base: '5', lg: '10' }}
    py={{ base: '16', lg: '32' }}
  >
    <HeroAbout />
  </Container>
);

export default Hero;
