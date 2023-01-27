import type { GetStaticProps } from 'next';
import { getMatters, BlogPostMatter } from '@lib/mdx';
import { Section } from '@components/section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';

import css from '@components/css/Blog.module.css';

interface BlogProps {
  posts: BlogPostMatter[];
}

const BlogPostCard: React.FC<{ post: BlogPostMatter }> = ({ post: { data, slug } }) => (
  <article className={css.article}>
    <Link href={`/blog/${slug}`}>
      <h2 className="text-link hover:underline text-3xl">{data.title}</h2>
    </Link>
    <p className="m-0">{data.description}</p>
    <div className="mt-2 text-secondary">
      <span className="hover:text-primary">
        <FontAwesomeIcon icon={['fas', 'clock']} /> {dayjs(data.publishedAt).fromNow()}
      </span>
    </div>
  </article>
);

const Blog: Page<BlogProps> = ({ posts }) => {
  const [searchValue, setSearchValue] = useState<string>();
  const searchInputRef = useRef<HTMLInputElement>();

  const sortedByDate = posts.sort((a, b) => b.data.publishedAt - a.data.publishedAt);

  const filteredPosts = sortedByDate.filter(
    (post) =>
      post.data.title.toLowerCase().includes(searchValue) || post.data.description.toLowerCase().includes(searchValue)
  );

  // get first 3 posts
  const recentPosts = sortedByDate.slice(0, 3);

  // skip first 3 posts and get the rest.
  const allPosts = posts.slice(3);

  return (
    <Section header="Blog">
      <p className="text-primary">
        Burası programlama, tecrübeler ve paylaşma gereği duyduğum makaleleri yazdığım blog sayfası. Toplamda{' '}
        <b>{posts.length}</b> tane makale yazdım. Bir makale aramak için aşağıdaki kutucuğa yazı yaz.
      </p>
      <div className={css.search}>
        <span className={css.searchButton} onClick={() => searchInputRef.current.focus()}>
          <FontAwesomeIcon icon={['fas', 'search']} />
        </span>
        <input
          ref={searchInputRef}
          onChange={(e) => setSearchValue(e.target.value.length >= 1 ? e.target.value.toLowerCase() : null)}
          type="text"
          className={css.searchInput}
          placeholder="Başlığa veya açıklamaya göre aramak için yaz."
        />
      </div>

      <div>
        {!searchValue && (
          <Section header="Son makaleler" id="recent-posts" className={null}>
            {recentPosts.map((post, i) => (
              <BlogPostCard post={post} key={i.toString()} />
            ))}
          </Section>
        )}
        <Section header="Tüm makaleler" id="all-posts">
          {filteredPosts.length >= 1 ? (
            filteredPosts.map((post, i) => <BlogPostCard post={post} key={i.toString()} />)
          ) : searchValue ? (
            <h3 className="text-secondary text-2xl">Üzgünüm aradığın şeyi bulamadık :{'('}</h3>
          ) : (
            allPosts.map((post, i) => <BlogPostCard post={post} key={i.toString()} />)
          )}
        </Section>
      </div>
    </Section>
  );
};

Blog.layoutProps = (ctx) => ({
  title: 'Blog',
  description: `Günlük hayattan edindiğim programlama, tecrübeler ve paylaşma gereği duyduğum şeyler hakkında yazdığım ve bilgi verdiğim Türkçe blog sayfası. Toplamda ${ctx.posts.length} tane makaleye sahip`,
});

export const getStaticProps: GetStaticProps<BlogProps> = () => {
  const posts = getMatters('blog');

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
