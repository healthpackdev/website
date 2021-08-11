import { Seo, SeoProps } from '@layout/Seo';
import Navbar from '@layout/Navbar';
import Footer from '@layout/Footer';
import ScrollTop from '@layout/scroll-top';

export type LayoutProps = SeoProps;

const Layout: React.FC<LayoutProps> = ({ children, ...props }) => (
  <>
    <Seo {...props} />
    <Navbar />
    <main className="max-w-content my-5">{children}</main>
    <ScrollTop />
    <Footer />
  </>
);

export default Layout;
