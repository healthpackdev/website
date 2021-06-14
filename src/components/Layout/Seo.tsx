import defaultSeoConfig from '@config/seo';
import { DefaultSeo, DefaultSeoProps } from 'next-seo';
import { useRouter } from 'next/router';

const Seo: React.FC<DefaultSeoProps> = ({ ...props }) => {
  const router = useRouter();
  const path = defaultSeoConfig.openGraph.url + router.asPath;
  return <DefaultSeo canonical={path} openGraph={{ url: path }} {...defaultSeoConfig} {...props} />;
};

export default Seo;
