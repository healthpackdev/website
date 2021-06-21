import type { IBlogPostMatter } from '@lib/mdx';
import css from './Blog.module.css';
import dayjs from 'dayjs';
// import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BlogPost: React.FC<{ post: IBlogPostMatter }> = ({ post }) => {
  const [fromNow, setFromNow] = useState<string>();

  useEffect(() => {
    setFromNow(dayjs(post.data.publishedAt).fromNow());
  }, [fromNow, post.data.publishedAt]);

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={css.post + ' hover:shadow-md'}
    ></motion.article>
  );
};

export default BlogPost;
