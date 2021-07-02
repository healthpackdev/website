import { useRouter } from 'next/router';
import Head from 'next/head';
import siteConfig from '@config/site-config.json';
import fonts from '@config/fonts.json';
import author from '@config/author-meta.json';
import Script from 'next/script';

const authorTwitter = author.socials.find((social) => social.icon[1] == 'twitter')?.href.split('/')[3];

export interface SeoProps {
  analytics?: boolean;
  description: string;
  title: string;
  openGraph?: {
    type: 'website' | 'article';
    image: string;
    article: {
      publishedTime: string;
    };
  };
}

const Seo: React.FC<SeoProps> = ({ description, title, openGraph = {}, analytics = true }) => {
  const router = useRouter();
  const url = `https://${siteConfig.hostName}`;
  const path = url + router.asPath;
  const titleTemplate = `${title} - ${siteConfig.hostName}`;

  return (
    <Head>
      <title>{titleTemplate}</title>
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#006ABC" />

      {/* openGraph */}
      <meta property="og:title" content={titleTemplate} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={openGraph.type || 'website'} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_IE" />
      <meta property="og:site_name" content={siteConfig.hostName} />
      <meta property="og:image" content={`${url}/${openGraph.image}`} />
      {openGraph.article && <meta property="article:published_time" content={openGraph.article.publishedTime} />}

      {/* Twitter */}
      <meta name="twitter:site" content={`@${authorTwitter}`} />
      <meta name="twitter:creator" content={`@${authorTwitter}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={openGraph.image} />

      <link rel="canonical" href={path} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="stylesheet" href={fonts.sans.url} />
      <link rel="stylesheet" href={fonts.comic.url} />
      <link rel="stylesheet" href={fonts.mono.url} />

      {analytics && <Script data-domain={siteConfig.hostName} src="https://plausible.io/js/plausible.js" />}
    </Head>
  );
};

export default Seo;
