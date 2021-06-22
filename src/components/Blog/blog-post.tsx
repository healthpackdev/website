import type { IBlogPostMatter } from '@lib/mdx';
import css from './Blog.module.css';
import dayjs from 'dayjs';
// import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// `/images/${data.image}`;
const BlogPost: React.FC<{ post: IBlogPostMatter }> = ({ post: { data, slug } }) => {
  return (
    <motion.article exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={css.article}>
      <Image src={require(`../../../public/images/${data.image}`)} width={256} height={128} alt={data.title} />

      <div>
        <header>{data.title}</header>
        <p>{data.description}</p>
        <div className={css.footer}>
          <span>{dayjs(data.publishedAt).fromNow()}</span>
          <span>{data.minRead} okuma dakikası</span>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPost;
