import { Section } from '@components/section';

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
    name: 'Go',
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

const About: Page = () => {
  return (
    <>
      <Section header="About Me">
        <p className="prose">
          Hi my name is Yasin Kadir. I was born in Turkey/Istanbul. I&apos;m currently a student in middle school. 1
          year ago I started programming with <b>Node.js</b> for write web apps. I mostly use Javascript and Typescript
          these are my favourites. after I learn Typescript I started learn React. For starting I was hate Next.js
          because at that time it was boring. at now I love <b>React</b> and <b>Next.js</b>, thanks for reading good
          bye.
        </p>
      </Section>
      <Section header="My Editor">
        <p className="prose">
          I&apos;m using{' '}
          <b>
            <a href="https://code.visualstudio.com">Visual Studio Code</a>
          </b>{' '}
          with this {extensions.length} extensions:
          <ul>
            {extensions.sort().map((ext) => (
              <li key={ext.item}>
                <a href={`https://marketplace.visualstudio.com/items?itemName=${ext.item}`}>{ext.name}</a>
              </li>
            ))}
          </ul>
          I&apos;m using <b>{extensions.find((ext) => ext.colorTheme).name}</b> as a color theme also{' '}
          <b>{extensions.find((ext) => ext.iconTheme).name}</b> as a icon theme.
        </p>
      </Section>
    </>
  );
};
About.LayoutProps = { seo: { title: 'About', description: 'Learn More About Me in this page.' } };

export default About;
