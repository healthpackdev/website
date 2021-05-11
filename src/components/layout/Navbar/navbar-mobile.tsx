import {
  Stack,
  IconButton,
  useColorModeValue as useColor,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import Footer from '@components/layout/Footer/footer-mobile';
import Link from '@components/common/link';
import siteConfig from '@config/site-config.json';

// make it like eggsy.xyz

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const blackOrWhite = useColor('black', 'white');
  const menuLinkHoverBgColor = useColor('gray.700', 'gray.700');
  const mutedColor = 'gray.500';
  const whiteOrBlack = 'white';
  const [path, setPath] = useState('/');
  useEffect(() => {
    const WindowPath = window.location.pathname + (window.location.hash ? window.location.hash : '');
    setPath(WindowPath);
  });
  return (
    <>
      <IconButton
        onClick={onOpen}
        size="lg"
        aria-label="open menu"
        borderRadius="full"
        outline="none"
        variant="ghost"
        icon={<Icon icon={['fas', 'bars']} />}
      />
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent background="gray.800">
            <DrawerHeader borderBottom="1px solid" borderBottomColor="gray.700" p="3">
              <Text color="blue.500" textAlign="center">
                Yasin Kadir
              </Text>
              <DrawerCloseButton color="white" />
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing={2}>
                {siteConfig.pages.map((page, index) => (
                  <Link
                    key={index.toString()}
                    href={page.href}
                    fontWeight="semibold"
                    color={path === page.section + page.href ? whiteOrBlack : mutedColor}
                    position="relative"
                    _hover={{ backgroundColor: menuLinkHoverBgColor, color: whiteOrBlack }}
                    p="3"
                    borderRadius="md"
                  >
                    {page.text}
                  </Link>
                ))}
              </Stack>
            </DrawerBody>
            <DrawerFooter>
              <Footer />
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default MobileNav;
