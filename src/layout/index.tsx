import Navbar from 'src/layout/Navbar';
import Footer from 'src/layout/Footer';
import ScrollTop from 'src/layout/scroll-top';
import Seo from 'src/layout/Seo';
import { NextSeoProps } from 'next-seo';
import { motion } from 'framer-motion';

export type LayoutProps = NextSeoProps;

const Layout: React.FC<NextSeoProps> = ({ children, ...props }) => (
  <>
    <Seo {...props} />
    <Navbar />
    <motion.main
      className="max-w-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.main>
    <ScrollTop />
    <Footer />
  </>
);

export default Layout;
