import fonts from '@config/fonts.json';
import siteConfig from '@config/site-config.json';
import author from '@config/author-meta.json';
import type { NextSeoProps } from 'next-seo';

const authorTwitter = author.socials.find((social) => social.icon[1] == 'twitter')?.href.split('/')[3];

const seoConfig: NextSeoProps = {
  titleTemplate: `%s - ${siteConfig.hostName}`,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: `https://${siteConfig.hostName}`,
    site_name: siteConfig.hostName,
  },
  additionalLinkTags: [
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'stylesheet', href: fonts.sans.url },
    { rel: 'stylesheet', href: fonts.header.url },
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'icon', href: '/favicon-32x32.png', sizes: '32x32' },
    { rel: 'icon', href: '/favicon-16x16.png', sizes: '16x16' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#006ABC' },
  ],
  additionalMetaTags: [{ name: 'theme-color', content: '#006ABC' }],
  twitter: {
    handle: `@${authorTwitter}`,
    site: `@${authorTwitter}`,
    cardType: 'summary_large_image',
  },
};

export default seoConfig;
