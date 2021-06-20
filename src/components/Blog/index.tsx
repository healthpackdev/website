import type { IBlogPost } from '@lib/mdx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import css from './Blog.module.css';
import BlogPost from './blog-post';

const BlogBody: React.FC<{ posts: IBlogPost[] }> = ({ posts }) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState({
    text: null,
    sortBy: 'date',
  });
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    setSearchValue({ ...searchValue, text: searchInputRef.current.value });
    setFilteredPosts(
      posts.filter((post) => {
        return (
          post.content.includes(searchValue.text) ||
          post.data.title.includes(searchValue.text) ||
          post.data.description.includes(searchValue.text)
        );
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
        <input ref={searchInputRef} type="text" className={css.searchInput} placeholder="Makale Ara" />
      </div>
      {!filteredPosts
        ? posts.map((post, i) => <BlogPost post={post} key={i.toString()} />)
        : filteredPosts.map((post, i) => <BlogPost post={post} key={i.toString()} />)}
    </>
  );
};

export default BlogBody;
