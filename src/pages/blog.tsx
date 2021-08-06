import { GetStaticProps } from 'next';
import { getMatters, BlogPostMatter } from '@lib/mdx';
import { Section } from '@components/section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import css from '@components/Blog.module.css';
import Link from 'next/link';
import dayjs from 'dayjs';

interface BlogProps {
  posts: BlogPostMatter[];
}

const BlogPostCard: React.FC<{ post: BlogPostMatter }> = ({ post: { data, slug } }) => (
  <article className={css.article}>
    <Link href={`/blog/${slug}`}>
      <a>
        <h2 className="text-blue-500 hover:underline text-3xl">{data.title}</h2>
      </a>
    </Link>
    <p className="m-0">{data.description}</p>
    <div className="mt-2 text-primary">
      <span className="hover:text-secondary">
        <FontAwesomeIcon icon={['fas', 'clock']} /> {dayjs(data.publishedAt).fromNow()}
      </span>
    </div>
  </article>
);

const Blog: Page<BlogProps> = ({ posts }) => {
  const [searchValue, setSearchValue] = useState<string>();
  let searchInputRef: HTMLInputElement;

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
        <span className={css.searchButton} onClick={() => searchInputRef.focus()}>
          <FontAwesomeIcon icon={['fas', 'search']} />
        </span>
        <input
          ref={(input) => {
            searchInputRef = input;
          }}
          onChange={() => setSearchValue(searchInputRef.value.length >= 1 ? searchInputRef.value.toLowerCase() : null)}
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
            <h3 className="text-primary text-2xl">Üzgünüm aradığın şeyi bulamadık :{'('}</h3>
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
