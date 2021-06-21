import type { IBlogPostMatter } from '@lib/mdx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import css from './Blog.module.css';
import BlogPost from './blog-post';

const BlogBody: React.FC<{ posts: IBlogPostMatter[] }> = ({ posts }) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState({
    text: null,
    sortBy: 'date',
  });
  const [filteredPosts, setFilteredPosts] = useState<IBlogPostMatter[]>([]);

  useEffect(() => {
    setFilteredPosts(
      posts
        .sort((a, b) => Number(new Date(b.data.publishedAt)) - Number(new Date(a.data.publishedAt)))
        .filter((post) => {
          return post.data.title.includes(searchValue.text) || post.data.description.includes(searchValue.text);
        })
    );
  }, [filteredPosts, posts, searchValue]);

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
          onChange={(e) => setSearchValue({ ...searchValue, text: e.target.value.toLowerCase() })}
          type="text"
          className={css.searchInput}
          placeholder="Başlığa veya açıklamaya göre aramak için yaz."
        />
      </div>
      <div>
        {filteredPosts.length < 1
          ? posts.map((post, i) => <BlogPost post={post} key={i.toString()} />)
          : filteredPosts.map((post, i) => <BlogPost post={post} key={i.toString()} />)}
      </div>
    </>
  );
};

export default BlogBody;
