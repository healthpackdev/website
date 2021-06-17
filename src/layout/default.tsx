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
