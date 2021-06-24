import type { IBlogPostMatter } from 'src/lib/mdx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import css from './Blog.module.css';
import BlogPost from './blog-post';
import { Section } from '@components/section';
import { AnimatePresence } from 'framer-motion';
import useSWR from 'swr';

const fetcher = async (...args) => {
  const res = await fetch(`/api/views?path=/blog/${args.join('')}`);
  return res.json();
};

const BlogBody: React.FC<{ posts: IBlogPostMatter[] }> = ({ posts }) => {
  const [searchValue, setSearchValue] = useState<string>(null);
  let searchInputRef: HTMLInputElement;
  for (const p of posts) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: res } = useSWR(p.slug, fetcher);

    p.data.views = res?.views;
  }

  const sortedByDate = posts.sort(
    (a, b) => Number(new Date(b.data.publishedAt)) - Number(new Date(a.data.publishedAt))
  );
  const sortedByViews = sortedByDate.slice(3).sort((a, b) => b.data.views - a.data.views);

  const filteredPosts = sortedByDate.filter((post) => {
    return (
      post.data.title.toLowerCase().includes(searchValue) || post.data.description.toLowerCase().includes(searchValue)
    );
  });

  const recentPosts = sortedByDate.slice(0, 3);
  const allPosts = sortedByDate.slice(3);

  return (
    <>
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
          <>
            <Section header="Son makaleler" id="recent-posts">
              {recentPosts.map((post, i) => (
                <BlogPost post={post} key={i.toString()} />
              ))}
            </Section>
            <Section header="Popüler makaleler" id="populer-posts">
              {sortedByViews.map((post, i) => (
                <BlogPost post={post} key={i.toString()} />
              ))}
            </Section>
          </>
        )}
        <Section header="Tüm makaleler" id="all-posts">
          <AnimatePresence>
            {filteredPosts.length >= 1 ? (
              filteredPosts.map((post, i) => <BlogPost post={post} key={i.toString()} />)
            ) : searchValue ? (
              <h3 className="text-primary text-2xl">Üzgünüm aradığın şeyi bulamadık :{'('}</h3>
            ) : (
              allPosts.map((post, i) => <BlogPost post={post} key={i.toString()} />)
            )}
          </AnimatePresence>
        </Section>
      </div>
    </>
  );
};
// posts.slice(3).map((post, i) => <BlogPost post={post} key={i.toString()} />
export default BlogBody;
