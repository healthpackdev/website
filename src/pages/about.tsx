import type { GetStaticProps } from 'next';
import { Section } from '@components/section';
import { getByPath } from '@lib/mdx';

import MDX from '@components/mdx';

const extensions = [
  {
    name: 'Darcula Theme',
    item: 'rokoroku.vscode-theme-darcula',
    colorTheme: true,
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
    name: 'GitHub Copilot',
    item: 'GitHub.copilot',
  },
  {
    name: 'Material Icon Theme',
    item: 'pkief.material-icon-theme',
    iconTheme: true,
  },
  {
    name: 'Prettier - Code formatter',
    item: 'esbenp.prettier-vscode',
  },
  {
    name: 'MDX',
    item: 'unifiedjs.vscode-mdx',
  },
  {
    name: 'Remote - Containers',
    item: 'ms-vscode-remote.remote-containers',
  },
  {
    name: 'Python',
    item: 'ms-python.python',
  },
  {
    name: 'Tailwind CSS IntelliSense',
    item: 'bradlc.vscode-tailwindcss',
  },
  {
    name: 'IntelliCode API Usage Examples',
    item: 'VisualStudioExptTeam.intellicode-api-usage-examples',
  },
  {
    name: 'Jupyter',
    item: 'ms-toolsai.jupyter',
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
  description: `Hi there! I'm Yasin Kadir, a software engineer based in Turkey. I'm a full-stack developer with a passion for building web applications. I'm student at highschool. I have 2 years experience in web development. Here is my website`,
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
