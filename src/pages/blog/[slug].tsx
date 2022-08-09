import type { GetStaticProps, GetStaticPaths } from 'next';
import { BlogPost as IBlogPost, getByPath, getParams } from '@lib/mdx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import dayjs from 'dayjs';
import MDX from '@components/mdx';
import BlogComments from '@components/blog-comments';

import author from '@config/author-meta.json';

interface BlogPostProps {
  post: IBlogPost;
}

const BlogPost: Page<BlogPostProps> = ({ post: { data, mdxSource } }) => {
  const date = dayjs(data.publishedAt);

  return (
    <article className="prose dark:prose-dark mx-auto my-2">
      <h1 className="!m-0">{data.title}</h1>
      <p className="text-secondary">{data.description}</p>
      <div className="space-x-4 mt-2 mb-10">
        <div className="bg-primary rounded-md py-1 px-3 inline-block border">
          <FontAwesomeIcon icon={['fas', 'clock']} /> {date.format('MMMM D[,] YYYY')}
        </div>
        <div className="bg-primary rounded-md py-1 px-3 inline-block border">
          <FontAwesomeIcon icon={['fas', 'hourglass']} /> {data.minRead} okuma
        </div>
      </div>
      <MDX mdxSource={mdxSource} />
      <BlogComments />
    </article>
  );
};

BlogPost.layoutProps = ({ post: { data } }) => ({
  title: data.title,
  description: `${data.description} - ${data.minRead} okuma süresi`,
  openGraph: {
    type: 'article',
    article: {
      publishedTime: new Date(data.publishedAt).toISOString(),
      authors: [`https://github.com/${author.github}`],
    },
    image: 'images/' + data.image,
  },
});

export default BlogPost;

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getParams('blog');

  return {
    paths: posts.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const post = await getByPath('blog', params.slug as string);

  return { props: { post } };
};
