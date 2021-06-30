import Navbar from 'src/layout/Navbar';
import Footer from '@layout/Footer';
import ScrollTop from '@layout/scroll-top';
import Seo from '@layout/Seo';
import { NextSeoProps } from 'next-seo';
import { motion } from 'framer-motion';
import site from '@config/site-config.json';
import Script from 'next/script';

export interface LayoutProps extends NextSeoProps {
  analytics?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, analytics = true, ...props }) => (
  <>
    {analytics && <Script data-domain={site.hostName} src="https://plausible.io/js/plausible.js" />}
    <Seo {...props} />
    <Navbar />
    <motion.main
      className="max-w-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}>
      {children}
    </motion.main>
    <ScrollTop />
    <Footer />
  </>
);

export default Layout;
