import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import ScrollTop from '@components/common/scroll-top';
import { DefaultSeoProps } from 'next-seo';
import { HTMLMotionProps, motion } from 'framer-motion';
import Seo from '@components/layout/Seo';

interface LayoutProps {
  seo: DefaultSeoProps;
}

const Layout: React.FC<LayoutProps & HTMLMotionProps<'main'>> = ({ children, seo, ...props }) => (
  <>
    <Seo {...seo} />
    <Navbar />
    <motion.main
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      {...props}
    >
      {children}
    </motion.main>
    <ScrollTop />
    <Footer />
  </>
);

export default Layout;
