import { useContext } from 'react';
import { Box, List, ListItem } from '@chakra-ui/react';
import Link from '@components/common/link';
import siteConfig from '@config/site-config.json';
import useMotion from '@hooks/use-motion';
import { Color } from '@hooks/use-color-map';

const Navigate: React.FC = ({ ...props }) => {
  const { header } = useContext(Color);

  const MotionLink = useMotion(Link);

  return (
    <Box as="nav" {...props}>
      <List display="flex">
        {siteConfig.pages.map((page, index) => (
          <ListItem key={index.toString()}>
            <MotionLink
              href={page.href}
              px="3"
              py="1"
              borderRadius="sm"
              _hover={{
                backgroundColor: header.linkHoverBg,
              }}
              userSelect="none"
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
