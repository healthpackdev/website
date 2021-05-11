import { Text, Box, Flex, useColorModeValue as useColor, Link } from '@chakra-ui/react';
import siteConfig from '@config/site-config.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Color } from '@hooks/use-color-map';
import { useContext } from 'react';

const HeroAbout: React.FC = () => {
  const altText = useColor('gray.600', 'gray.400');
  const green = useColor('green.500', 'green.400');
  const yellow = useColor('yellow.500', 'yellow.400');
  const reactJS = useColor('#00b7f7', '#61DBFB');
  const { hero, mutedText } = useContext(Color);

  return (
    <Box w="full" pr={['0', '0', '300px']}>
      <Text as="header" fontSize={['2xl', '4xl']} fontWeight="semibold" textAlign={['center', 'center', 'left']}>
        <Text as="span" color={hero.headerJob}>
          Full Stack
        </Text>{' '}
        Web Developer
      </Text>
      <Text fontSize="md" color={mutedText} textAlign={['center', 'center', 'left']}>
        Hi my name is{' '}
        <Text as="strong" fontWeight="semibold" color={green}>
          Yasin Kadir
        </Text>
        . I am young developer from Turkey and for a few months i started creating simple websites
      </Text>
      <Flex justifyContent={['center', 'center', 'left']}>
        {siteConfig.author.socials.map((social, index) => (
          <Link href={social.href} mx="2" my="3" key={index.toString()} color={social.color} isExternal>
            <FontAwesomeIcon icon={social.icon as any} />
          </Link>
        ))}
      </Flex>
    </Box>
  );
};
export default HeroAbout;
