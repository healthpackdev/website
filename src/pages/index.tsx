import Hero from '@components/Hero';
import Techs from '@components/Techs';
import Repos from '@components/Repos';
import Contact from '@components/Contact';
import Layout from '@layout/default';
import { GetStaticProps } from 'next';
import { Octokit } from '@octokit/rest';
import author from '@config/author-meta.json';

interface IRepo {
  readonly fork_count: number;
  readonly lang: string;
  readonly link: string;
  readonly name: string;
  readonly star: number;
  readonly desc: string;
}

export type ErrorOrRepo = IRepo[] | string;
interface HomeProps {
  repos: ErrorOrRepo;
}

const Home: React.FC<HomeProps> = ({ repos }) => (
  <Layout
    seo={{
      title: `Home`,
      description: `I&apos;m a Web Developer and 7th grade student at Şair Nedim. I have about 1 years experience in Javascript. I love Next.js and React with Typescript. I currently develop this website and trying to learn Golang - visit website and learn more about me`,
    }}
  >
    <Hero />
    <Techs />
    <Repos repos={repos} />
    <Contact />
  </Layout>
);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const client = new Octokit();
  let repos: ErrorOrRepo;

  await client
    .request('GET /users/{username}/repos', {
      username: author.github,
    })
    .then(({ data }) => {
      repos = data
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .filter((project) => project.name !== author.github && !project.archived)
        .slice(0, 12) // Get 12 max repo
        .map((project) => ({
          fork_count: project.forks_count,
          name: project.name,
          star: project.stargazers_count,
          lang: project.language,
          desc: project.description || 'No Description Provided',
          link: project.html_url,
        }));
    })
    .catch(() => {
      repos = 'Rate Limit Error';
    });

  return {
    props: {
      repos,
    },
    revalidate: 5,
  };
};
export default Home;
