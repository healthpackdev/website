import type { GetStaticProps } from 'next';
import { Section } from '@components/section';
import { getByPath } from '@lib/mdx';

import MDX from '@components/mdx';

const extensions = [
  {
    name: 'Bracket Pair Colorizer 2',
    item: 'CoenraadS.bracket-pair-colorizer-2',
  },
  {
    name: 'Eslint',
    item: 'dbaeumer.vscode-eslint',
  },
  {
    name: 'Git History',
    item: 'donjayamanne.githistory',
  },
  {
    name: 'GitLens - Git supercharged',
    item: 'eamodio.gitlens',
  },
  {
    name: 'Golang',
    item: 'golang.go',
  },
  {
    name: 'Material Icon Theme',
    item: 'pkief.material-icon-theme',
    iconTheme: true,
  },
  {
    name: 'Night Owl',
    item: 'sdras.night-owl',
    colorTheme: true,
  },
  {
    name: 'Prettier - Code formatter',
    item: 'esbenp.prettier-vscode',
  },
  {
    name: 'Remote - Containers',
    item: 'ms-vscode-remote.remote-containers',
  },
  {
    name: 'Tailwind CSS IntelliSense',
    item: 'bradlc.vscode-tailwindcss',
  },
  {
    name: 'Visual Studio IntelliCode',
    item: 'visualstudioexptteam.vscodeintellicode',
  },
];

interface AboutProps {
  about: Record<string, any>;
}

const About: Page<AboutProps> = ({ about }) => {
  return <MDX scope={{ extensions }} components={{ Section }} mdxSource={about.mdxSource} />;
};

About.layoutProps = {
  title: 'About',
  description: `Hi my name is Yasin Kadir. I was born in Turkey/Istanbul. I&apos;m currently a student in middle school. 1
year ago I started programming with <b>Node.js</b> for write web apps. I mostly use Javascript and Typescript
these are my favourites.`,
};

export const getStaticProps: GetStaticProps = async () => {
  const about = await getByPath('about');
  return {
    props: {
      about,
    },
  };
};

export default About;
