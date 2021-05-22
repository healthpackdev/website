import site from '@config/site-config.json';
import { DefaultSeo } from 'next-seo';
import type { DefaultSeoProps } from 'next-seo';

const SeoConfig: DefaultSeoProps = {
  titleTemplate: `%s - ${site.host_name}`,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: `https://${site.host_name}`,
    images: [
      {
        url: `https://${site.host_name}/favicons/favicon.ico`,
        alt: 'favicon',
      },
    ],
    site_name: site.host_name, // .match(/[a-zA-Z0-9]+/)
  },
  additionalLinkTags: [
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'stylesheet', href: site.font.url },
    { rel: 'icon', href: '/favicons/favicon.ico' },
    { rel: 'icon', href: 'favicon-32x32.png', sizes: '32x32' },
    { rel: 'icon', href: '/favicon-16x16.png', sizes: '16x16' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#006ABC' },
    { rel: 'manifest', href: '/manifest.json' },
  ],
  additionalMetaTags: [
    { name: 'msapplication-TileColor', content: '#006ABC' },
    { name: 'theme-color', content: '#006ABC' },
  ],
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
const Seo: React.FC<DefaultSeoProps> = ({ ...props }) => <DefaultSeo {...SeoConfig} {...props} />;
export { SeoConfig, Seo };
