import { readContentFiles, IBlogPost, getBySlug } from '@lib/markdown';
import { GetStaticProps, GetStaticPaths } from 'next';
import author from '@config/author-meta.json';
import site from '@config/site-config.json';
import Image from 'next/image';
import dayjs from 'dayjs';
import useSWR from 'swr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Markdown from '@components/markdown';

interface BlogPostProps {
  post: IBlogPost;
}
const fetcher = async (...args) => {
  const res = await fetch(`/api/views?path=/blog/${args.join('')}`);
  return res.json();
};

const BlogPost: Page<BlogPostProps> = ({ post: { data, markdown, slug } }) => {
  const date = dayjs(data.publishedAt);
  data.views = useSWR(slug, fetcher).data?.views;

  return (
    <>
      <article className="prose dark:prose-dark mx-auto my-2">
        <h1 className="!text-5xl !my-2">{data.title}</h1>
        <div className="mb-5">
          <div className="bg-primary rounded-md py-1 px-3 inline-block border m-2">
            <FontAwesomeIcon icon={['fas', 'clock']} /> {date.format('MMMM MM[,] YYYY')}
          </div>
          <div className="bg-primary rounded-md py-1 px-3 inline-block border m-2">
            <FontAwesomeIcon icon={['fas', 'book-reader']} /> {Number(data.minRead).toFixed()} dakika okuma
          </div>
          <div className="bg-primary rounded-md py-1 px-3 inline-block border m-2">
            <FontAwesomeIcon icon={['fas', 'eye']} /> {data.views ?? '0'} görüntülenme
          </div>

          <Image src={require(`public/images/${data.image}`)} alt={data.title} />
        </div>
        <Markdown markdown={markdown} />
      </article>
    </>
  );
};

BlogPost.layoutProps = ({ post: { data } }) => ({
  title: data.title,
  description: data.description,
  openGraph: {
    type: 'article',
    article: {
      publishedTime: new Date(data.publishedAt).toISOString(),
      authors: [`https://github.com/${author.github}`],
    },
    images: [
      {
        url: `${site.hostName}/images/${data.image}`,
        alt: data.title,
      },
    ],
  },
});

export default BlogPost;

export const getStaticPaths: GetStaticPaths = () => {
  const posts = readContentFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.md/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = ({ params }) => {
  const post = getBySlug('blog', params.slug as string);

  return { props: { post } };
};
