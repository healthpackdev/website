import { Container, Text, Link, Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import siteConfig from '@config/site-config.json';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Footer: React.FC = () => {
  const whoamiColor = 'blue.500';
  const chakraUIColor = 'teal.500';

  return (
    <Box as="footer" py="2" mt="10" borderBottomWidth="5px" borderBottomColor="blue.500">
      <Container
        maxW="container.lg"
        textAlign={['center', 'center', 'left']}
        display="flex"
        justifyContent="space-between"
        flexDirection={['column', 'column', 'row']}
      >
        <Text className="muted" fontSize="sm" as="p">
          © {new Date().getFullYear()} all rights reserved. Made with <FontAwesomeIcon icon={faHeart} color="red" /> by{' '}
          <Link href="https://github.com/healthpackdev" isExternal color={whoamiColor}>
            healthpack
          </Link>{' '}
          using{' '}
          <Link isExternal href="https://chakra-ui.com" color={chakraUIColor}>
            Chakra UI
          </Link>
        </Text>
        <Box order={[-1, -1, 0]}>
          {siteConfig.author.socials.map((social, index) => (
            <Link href={social.href} mx="2" my="3" key={index.toString()} color={social.color}>
              <FontAwesomeIcon icon={social.icon as IconProp} />
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;
