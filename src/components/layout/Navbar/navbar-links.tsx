import { Box, List, ListItem, useColorModeValue } from '@chakra-ui/react';
import Link from '@components/common/link';
import siteConfig from '@config/site-config.json';
import useMotion from '@hooks/use-motion';

const Navigate: React.FC = ({ ...props }) => {
  const MotionLink = useMotion(Link);

  return (
    <Box as="nav" {...props}>
      <List display="flex">
        {siteConfig.pages.map((page, index) => (
          <ListItem key={index.toString()}>
            <MotionLink
              href={page.href}
              px="3"
              _hover={{ backgroundColor: useColorModeValue('gray.50', 'gray.800') }}
              py="2"
              borderRadius="md"
              userSelect="none"
              fontSize="lg"
            >
              {page.text}
            </MotionLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default Navigate;
