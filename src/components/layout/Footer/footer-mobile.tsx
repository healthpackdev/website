import { Container, Flex, Text, Link, useColorModeValue as useColor } from '@chakra-ui/react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import siteConfig from '@config/site-config.json';

const FooterMobile: React.FC = () => {
  const textColor = useColor('gray.400', 'gray.500');

  return (
    <Container>
      <Text textAlign="center" color={textColor} fontSize="sm">
        © {new Date().getFullYear()} all rights reserved
      </Text>
      <Flex justifyContent="center">
        {siteConfig.author.socials.map((social, index) => (
          <Link href={social.href} mx="2" my="3" key={index.toString()}>
            <Icon icon={social.icon} color="white" />
          </Link>
        ))}
      </Flex>
    </Container>
  );
};

export default FooterMobile;
