import { Portal, Box, BoxProps } from '@chakra-ui/react';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import ScrollTop from '@components/common/scroll-top';
import { Seo } from '@config/seo';
import type { DefaultSeoProps } from 'next-seo';

interface LayoutProps extends BoxProps {
  seo: DefaultSeoProps;
}

const Layout: React.FC<LayoutProps> = ({ children, seo, ...props }) => (
  <>
    <Seo {...seo} />
    <Navbar />
    <Box as="main" minH="100%" {...props}>
      {children}
    </Box>
    <Portal>
      <ScrollTop />
    </Portal>
    <Footer />
  </>
);

export default Layout;
