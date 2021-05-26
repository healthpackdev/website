import Hero from '@components/containers/Hero';
import Techs from '@components/containers/Techs';
import Projects from '@components/containers/Projects';
import Layout from '@components/layout';
import { GetStaticProps } from 'next';
import { Octokit } from '@octokit/rest';
import siteConfig from '@config/site-config.json';

interface IRepo {
  readonly fork_count: number;
  readonly lang: string;
  readonly link: string;
  readonly name: string;
  readonly star: number;
  readonly desc: string;
}

export type ErrorOrRepo = Array<IRepo> | string;
interface HomeProps {
  projects: ErrorOrRepo;
}

const Home: React.FC<HomeProps> = ({ projects }) => (
  <Layout
    seo={{
      title: `Home`,
      description:
        'Young developer from Turkey. Interested in programming. recently started building simple websites. Javascript and Typescript lover'
    }}
  >
    <Hero />
    <Techs />
    <Projects projects={projects} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const client = new Octokit();
  let projects: ErrorOrRepo;

  await client
    .request('GET /users/{username}/repos', {
      username: siteConfig.author.github,
    })
    .then(({ data }) => {
      projects = data
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .filter((project) => project.name !== siteConfig.author.github && !project.archived)
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
      projects = 'Rate Limit Error';
    });

  return {
    props: {
      projects,
    },
    revalidate: 5,
  };
};
export default Home;
