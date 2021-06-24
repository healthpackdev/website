import { readContentFiles, IBlogPost, getBySlug } from '@lib/mdx';
import { GetStaticProps, GetStaticPaths } from 'next';
import author from '@config/author-meta.json';
import site from '@config/site-config.json';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface BlogPostProps {
  post: IBlogPost;
}
const BlogPost: Page<BlogPostProps> = ({ post }) => (
  <article className="article-content">
    <MDXRemote {...(post.content as MDXRemoteSerializeResult<Record<string, any>>)} components={{}} />
  </article>
);
export default BlogPost;

BlogPost.PageProps = ({ post: { data } }) => ({
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

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const post = await getBySlug('blog', params.slug as string);
  console.log(post);
  return { props: { post } };
};
