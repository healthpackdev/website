import { Text, Box, Flex, useColorModeValue as useColor, Link } from '@chakra-ui/react';
import siteConfig from '@config/site-config.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useMotion from '@hooks/use-motion';

const HeroAbout: React.FC = () => {
  const green = useColor('green.500', 'green.400');
  const MotionLink = useMotion(Link);

  return (
    <Box w="full" pr={['0', '0', '300px']}>
      <Text
        as="header"
        color="blue.500"
        fontSize={['2xl', '4xl']}
        fontWeight="semibold"
        textAlign={['center', 'center', 'left']}
      >
        Web developer
      </Text>
      <Text fontSize="md" className="muted" textAlign={['center', 'center', 'left']}>
        Hi my name is{' '}
        <Text as="strong" fontWeight="semibold" color={green}>
          Yasin Kadir
        </Text>
        . I am young full-stack web developer from turkey 🇹🇷. I recently started building simple websites and you are
        here in my website!
      </Text>
      <Flex justifyContent={['center', 'center', 'left']}>
        {siteConfig.author.socials.map((social, index) => (
          <MotionLink
            // whileHover={{ scale: 1.5 }}
            whileHover={{ y: '-2px' }}
            href={social.href}
            mx="2"
            my="3"
            key={index.toString()}
            color={social.color}
            isExternal
          >
            <FontAwesomeIcon icon={social.icon as any} />
          </MotionLink>
        ))}
      </Flex>
    </Box>
  );
};
export default HeroAbout;
