import type { IBlogPostMatter } from '@lib/mdx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Section } from '@components/section';
import { useAPI } from '@lib/fetch';
import css from './Blog.module.css';
import BlogPost from './blog-post';

const BlogBody: React.FC<{ posts: IBlogPostMatter[] }> = ({ posts }) => {
  const [searchValue, setSearchValue] = useState<string>(null);
  let searchInputRef: HTMLInputElement;
  const { res } = useAPI('views');

  res
    ?.filter(({ page }) => page.startsWith('/blog/'))
    .forEach(({ page, visitors }) => {
      const p = posts.find((p) => `/blog/${p.slug}` === page);

      if (p) p.data.views = visitors;
    });

  const sortedByViews = posts.sort((a, b) => b.data.views - a.data.views);
  const sortedByDate = sortedByViews
    .slice(3)
    .sort((a, b) => Number(new Date(b.data.publishedAt)) - Number(new Date(a.data.publishedAt)));

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
            <Section header="Son makaleler" id="recent-posts" className={null}>
              {recentPosts.slice(0, 3).map((post, i) => (
                <BlogPost post={post} key={i.toString()} />
              ))}
            </Section>
            <Section header="Popüler makaleler" id="populer-posts">
              {sortedByViews.slice(0, 3).map((post, i) => (
                <BlogPost post={post} key={i.toString()} />
              ))}
            </Section>
          </>
        )}
        <Section header="Tüm makaleler" id="all-posts">
          {filteredPosts.length >= 1 ? (
            filteredPosts.map((post, i) => <BlogPost post={post} key={i.toString()} />)
          ) : searchValue ? (
            <h3 className="text-primary text-2xl">Üzgünüm aradığın şeyi bulamadık :{'('}</h3>
          ) : (
            allPosts.map((post, i) => <BlogPost post={post} key={i.toString()} />)
          )}
        </Section>
      </div>
    </>
  );
};
// posts.slice(3).map((post, i) => <BlogPost post={post} key={i.toString()} />
export default BlogBody;
