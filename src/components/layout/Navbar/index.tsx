import { Flex, useMediaQuery, Container } from '@chakra-ui/react';
import NavbarImage from '@components/layout/Navbar/navbar-image';
import NavbarLinks from '@components/layout/Navbar/navbar-links';
import NavbarMobile from '@components/layout/Navbar/navbar-mobile';
import ThemeToggle from '@components/common/theme-toggle';

const Navbar: React.FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 500px)');

  return (
    <Container
      as="header"
      maxW="container.lg"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py="4"
      position="relative"
    >
      <NavbarImage />
      <Flex alignItems="center" px="2">
        {!isMobile && <NavbarLinks />}
        <ThemeToggle />
        {isMobile && <NavbarMobile />}
      </Flex>
    </Container>
  );
};

export default Navbar;
