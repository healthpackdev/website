import Navbar from 'src/layout/Navbar';
import Footer from 'src/layout/Footer';
import ScrollTop from 'src/layout/scroll-top';
import Seo from 'src/layout/Seo';
import { DefaultSeoProps } from 'next-seo';
import { HTMLMotionProps, motion } from 'framer-motion';

interface LayoutProps {
  seo: DefaultSeoProps;
}

const Layout: React.FC<LayoutProps & HTMLMotionProps<'main'>> = ({ children, seo, ...props }) => (
  <>
    <Seo {...seo} />
    <Navbar />
    <motion.main
      className="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
