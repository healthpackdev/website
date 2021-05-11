import { Portal, Box } from '@chakra-ui/react';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import ScrollTop from '@components/common/scroll-top';

const Layout: React.FC = ({ children }) => (
  <>
    <Navbar />
    <Box as="main" minH="100%">
      {children}
    </Box>
    <Portal>
      <ScrollTop />
    </Portal>
    <Footer />
  </>
);

export default Layout;
