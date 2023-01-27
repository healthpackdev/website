import { GetStaticProps } from 'next';
import { getUserRepositories } from '@lib/github';

import Hero from '@components/Hero';
import Techs from '@components/Techs';
import { Repos, ReposProps } from '@components/Repos';
import Contact from '@components/Contact';

import author from '@config/author-meta.json';

interface HomeProps extends ReposProps {}

const Home: Page<HomeProps> = ({ repos }) => (
  <>
    <Hero />
    <Techs />
    <Repos repos={repos} />
    <Contact />
  </>
);

Home.layoutProps = {
  title: `Home`,
  description: `I'm a Web Developer and student. I have about 1 years experience in Javascript. I love Next.js and React with Typescript. I currently develop this website and trying to learn Python - visit website and learn more about me`,
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { data } = await getUserRepositories(author.github);
  const repos = data
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .filter((project) => project.name !== author.github && !project.archived && !project.fork)
    .slice(0, 12) // Get 12 max repo
    .map((project) => ({
      fork_count: project.forks_count,
      name: project.name,
      star: project.stargazers_count,
      lang: project.language,
      desc: project.description || 'No Description Provided',
      link: project.html_url,
    }));

  return {
    props: {
      repos,
    },
    revalidate: 5,
  };
};
export default Home;
