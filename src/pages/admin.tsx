import dynamic from 'next/dynamic';
import Head from 'next/head';
import config from '@config/netlify-cms';
import fonts from '@config/fonts.json';
import { useEffect } from 'react';
import type { NetlifyCmsApp } from 'netlify-cms-app';

const NetlifyCMS = dynamic(
  () =>
    import('netlify-cms-app')
      // @ts-ignore
      .then((cms: typeof NetlifyCmsApp) => {
        cms.init({ config });

        // eslint-disable-next-line react/display-name
        return () => <></>;
      })
      .then((fragment) => fragment),
  {
    ssr: false,
  }
);

const headLinks: React.HTMLProps<HTMLLinkElement>[] = [
  { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  { rel: 'stylesheet', href: fonts.sans.url },
];

const Admin: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('font-primary');
  });
  return (
    <>
      <Head>
        {headLinks.map((data, index) => (
          <link {...data} key={index.toString()} />
        ))}
      </Head>
      <NetlifyCMS />
    </>
  );
};

export default Admin;
