import { GetStaticProps } from 'next';
import { getBlogPosts, IBlogPost } from '@lib/mdx';
import { Section } from '@components/section';
import BlogBody from '@components/Blog';

interface BlogProps {
  posts: IBlogPost[];
}
const Blog: Page<BlogProps> = ({ posts }) => (
  <>
    <Section header="Blog">
      <BlogBody posts={posts} />
    </Section>
  </>
);
Blog.LayoutProps = (ctx) => {
  return {
    seo: {
      title: 'Blog',
      description: `Günlük hayattan edindiğim programlama, tecrübeler ve paylaşma gereği duyduğum şeyler hakkında yazdığım ve bilgi verdiğim Türkçe blog sayfası. Toplamda ${ctx.posts.length} tane makaleye sahip`,
    },
  };
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const posts = getBlogPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
