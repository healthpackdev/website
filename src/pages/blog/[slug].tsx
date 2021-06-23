import { readContentFiles, IBlogPost, getBySlug } from '@lib/mdx';
import { GetStaticProps, GetStaticPaths } from 'next';
import dayjs from 'dayjs';
import author from '@config/author-meta.json';
import site from '@config/site-config.json';

interface BlogPostProps {
  post: IBlogPost;
}
const BlogPost: Page<BlogPostProps> = ({ post }) => <>{post.data.title}</>;
export default BlogPost;

BlogPost.PageProps = ({ post: { data } }) => ({
  title: data.title,
  description: data.description,
  openGraph: {
    type: 'article',
    article: { publishedTime: dayjs(data.publishedAt).format(), authors: [`https://github.com/${author.github}`] },
    images: [
      {
        url: `${site.hostName}/images/${data.image}`,
        alt: data.title,
      },
    ],
  },
});

export const getStaticPaths: GetStaticPaths = () => {
  const posts = readContentFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = ({ params }) => {
  const post = getBySlug('blog', params.slug as string);

  return { props: { post } };
};
