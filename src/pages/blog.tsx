import { GetStaticProps } from 'next';
import { getBlogPostMatters, IBlogPostMatter } from '@lib/mdx';
import { Section } from '@components/section';
import BlogBody from '@components/Blog';

interface BlogProps {
  posts: IBlogPostMatter[];
}

const Blog: Page<BlogProps> = ({ posts }) => (
  <>
    <Section header="Blog">
      <BlogBody posts={posts} />
    </Section>
  </>
);

Blog.PageProps = (ctx) => ({
  title: 'Blog',
  description: `Günlük hayattan edindiğim programlama, tecrübeler ve paylaşma gereği duyduğum şeyler hakkında yazdığım ve bilgi verdiğim Türkçe blog sayfası. Toplamda ${ctx.posts.length} tane makaleye sahip`,
});

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const posts = getBlogPostMatters();

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
