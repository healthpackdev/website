import { Container, Text, Link, Box } from '@chakra-ui/react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Color } from '@hooks/use-color-map';
import { useContext } from 'react';

const Footer: React.FC = () => {
  const whoamiColor = 'blue.400';
  const chakraUIColor = 'teal.400';
  const { cardBg, mutedText } = useContext(Color);

  return (
    <Box as="footer" backgroundColor={cardBg} py="2" mt="10" borderBottomWidth="5px" borderBottomColor="green.500">
      <Container textAlign="center" display="block">
        <Text color={mutedText} fontSize="sm" as="p">
          © {new Date().getFullYear()} all rights reserved. Made with <Icon icon={faHeart} color="red" /> by{' '}
          <Link href="https://github.com/healthpackdev" isExternal color={whoamiColor}>
            healthpack
          </Link>{' '}
          using{' '}
          <Link isExternal href="https://chakra-ui.com" color={chakraUIColor}>
            Chakra UI
          </Link>
        </Text>
      </Container>
    </Box>
  );
};
export default Footer;
