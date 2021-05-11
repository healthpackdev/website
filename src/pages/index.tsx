import Hero from '@components/containers/Hero';
import Techs from '@components/containers/Techs';
import Projects from '@components/containers/Projects';
import Journay from '@components/containers/Journay';
import Layout from '@components/layout';
import { GetStaticProps } from 'next';
import { Octokit } from '@octokit/rest';
import siteConfig from '@config/site-config.json';
import useColorMap, { Color } from '@hooks/use-color-map';

function Home({ projects }) {
  const theme = useColorMap('index');

  return (
    <Color.Provider value={theme}>
      <Layout>
        <Hero />
        <Techs />
        <Projects value={projects} />
        <Journay />
      </Layout>
    </Color.Provider>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const client = new Octokit();
  let projects;
  try {
    const { data } = await client.request('GET /users/{username}/repos', {
      username: siteConfig.author.github,
    });
    projects = data
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .filter((project) => project.name !== siteConfig.author.github && !project.archived)
      .slice(0, 6)
      .map((project) => ({
        fork: project.fork,
        name: project.name,
        star: project.stargazers_count,
        lang: project.language,
        desc: project.description || 'No Description Provided',
        link: project.html_url,
      }));
    // Get Only needs.
  } catch {
    projects = {
      error: true,
      msg: 'Error while fetching repos... revalidate in 5 min',
    };
  }

  return {
    props: {
      projects,
    },
    revalidate: 5,
  };
};
export default Home;
