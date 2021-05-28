import { Container, Img } from '@chakra-ui/react';
import HeroAbout from '@components/containers/Hero/hero-about';
import useMotion from '@hooks/use-motion';

const MotionImg = useMotion(Img);
const Hero: React.FC = () => (
  <Container
    as="section"
    maxW="container.lg"
    borderRadius="md"
    display="flex"
    alignItems="center"
    flexDirection={['column', 'column', 'row']}
    py={{ base: '16', lg: '20' }}
  >
    <MotionImg
      src="/avatar.png"
      alt="Profile photo"
      boxSize={125}
      mx="5"
      cursor="pointer"
      boxShadow="lg"
      whileHover={{ translateY: '-10px' }}
      borderRadius="full"
    />
    <HeroAbout />
  </Container>
);

export default Hero;
