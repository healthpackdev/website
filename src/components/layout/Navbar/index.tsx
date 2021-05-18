import { Flex, Box, useMediaQuery, Container, useColorModeValue, Spacer } from '@chakra-ui/react';
import NavbarImage from '@components/layout/Navbar/navbar-image';
import NavbarLinks from '@components/layout/Navbar/navbar-links';
import NavbarMobile from '@components/layout/Navbar/navbar-mobile';
import NavbarGithub from '@components/layout/Navbar/navbar-github';

import ThemeToggle from '@components/common/theme-toggle';

const Navbar: React.FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 500px)');

  return (
    <Box as="header" maxW="full" backgroundColor={useColorModeValue('white', 'gray.700')} boxShadow="lg" py="2">
      <Container maxW="container.lg" display="flex" alignItems="center">
        <Flex alignItems="center">
          {isMobile && <NavbarMobile />}
          <NavbarImage />
          {!isMobile && <NavbarLinks />}
        </Flex>
        <Spacer />
        <Flex alignItems="center" px="2">
          <NavbarGithub />
          <ThemeToggle />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
