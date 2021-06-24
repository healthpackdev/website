import defaultSeoConfig from '@config/seo';
import { useEffect } from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';

const Seo: React.FC<NextSeoProps> = ({ ...props }) => {
  const router = useRouter();
  const path = defaultSeoConfig.openGraph.url + router.asPath;
  return <NextSeo canonical={path} openGraph={{ url: path }} {...defaultSeoConfig} {...props} />;
};

export default Seo;
