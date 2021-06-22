import type { IBlogPostMatter } from '@lib/mdx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import css from './Blog.module.css';
import BlogPost from './blog-post';
import { Section } from '@components/section';
import { AnimatePresence } from 'framer-motion';

const BlogBody: React.FC<{ posts: IBlogPostMatter[] }> = ({ posts }) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState<string>(null);
  const [recentPosts, setRecentPosts] = useState([]);
  // const [popularPosts, setPopulerPosts] = useState([]);
  const sortedByDate = posts.sort(
    (a, b) => Number(new Date(b.data.publishedAt)) - Number(new Date(a.data.publishedAt)) // use server's date.
  );

  const filteredPosts = sortedByDate.filter((post) => {
    return (
      post.data.title.toLowerCase().includes(searchValue) || post.data.description.toLowerCase().includes(searchValue)
    );
  });

  useEffect(() => {
    const sortedByViews = posts.sort((a, b) => b.data.views - a.data.views);

    setRecentPosts(sortedByDate.slice(0, 3));
  }, []);

  return (
    <>
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
          <Section header="Son makaleler" id="recent-posts">
            {recentPosts.map((post, i) => (
              <BlogPost post={post} key={i.toString()} />
            ))}
          </Section>
        )}
        <Section header="Tüm makaleler" id="all-posts">
          <AnimatePresence>
            {filteredPosts.length >= 1 ? (
              filteredPosts.map((post, i) => <BlogPost post={post} key={i.toString()} />)
            ) : searchValue ? (
              <h3 className="text-primary text-2xl">Üzgünüm aradığın şeyi bulamadık :(</h3>
            ) : (
              posts.slice(3).map((post, i) => <BlogPost post={post} key={i.toString()} />)
            )}
          </AnimatePresence>
        </Section>
      </div>
    </>
  );
};
// posts.slice(3).map((post, i) => <BlogPost post={post} key={i.toString()} />
export default BlogBody;
