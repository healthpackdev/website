import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import ScrollTop from '@components/common/scroll-top';
import { Seo } from '@config/seo';
import type { DefaultSeoProps } from 'next-seo';
import { HTMLMotionProps, motion } from 'framer-motion';

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
      className="min-h-full"
      {...props}
    >
      {children}
    </motion.main>
    <ScrollTop />
    <Footer />
  </>
);

export default Layout;
