import { GetStaticProps } from 'next';
import Layout from '@layout/default';
import { getBlogPosts, IBlogPost } from '@lib/mdx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import Link from 'next/link';

interface BlogProps {
  posts: IBlogPost[];
}
const Blog: React.FC<BlogProps> = ({ posts }) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <Layout
      seo={{
        title: 'Blog',
        description: `Yasin'in günlük hayattan edindiği programlama, tecrübeler ve paylaşma gereği duyduğu şeyler hakkında yazdığı ve bilgi verdiği Türkçe blog sayfası. Toplamda ${posts.length} tane makaleye sahip`, // it is turkish
      }}
    >
      <div className="my-16">
        <header className="text-4xl my-3 font-semibold">Blog</header>
        <p className="text-gray-600 dark:text-gray-400">
          Burası programlama, tecrübeler ve paylaşma gereği duyduğum makaleleri yazdığım blog sayfası. Toplamda{' '}
          <b>{posts.length}</b> tane makale yazdım. Bir makale aramak için aşağıdaki kutucuğa yazı yaz.
        </p>
        <div className="relative">
          <input ref={searchInputRef} type="text" className="input !bg-gray-700 w-full" placeholder="Yazı Ara" />
          <FontAwesomeIcon
            className="cursor-pointer text-gray-400 hover:scale-105 absolute right-5 top-5"
            icon={['fas', 'search']}
            onClick={() => searchInputRef.current.focus()}
          />
        </div>
        {posts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={index.toString()}>
            <a>
              <div className="border border-gray-700 rounded-md p-2 my-2 cursor-pointer">
                <header className="text-2xl">{post.data.title}</header>
                <div className="text-gray-300">{post.data.description}</div>
                <div>{post.data.publishedAt}</div>
                <div>{post.data.categories}</div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
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
