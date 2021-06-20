import type { IBlogPost } from '@lib/mdx';
import css from './Blog.module.css';
import dayjs from 'dayjs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const BlogPost: React.FC<{ post: IBlogPost }> = ({ post: { slug, data } }) => (
  <Link href={`/blog/${slug}`}>
    <a>
      <motion.article
        initial={{ y: 5 }}
        animate={{ y: 0 }}
        whileHover={{ y: -2 }}
        className={css.post + ' hover:shadow-md'}
      >
        <header className="flex justify-between">
          <h4>{data.title}</h4>
        </header>
        <div className={css.postBody}>
          <p>{data.description}</p>
        </div>
        <div className={css.postFooter}>
          <div>
            {dayjs(data.publishedAt || new Date(2012, 2, 9)).fromNow()} - en az <b>{data.minRead}</b> okuma dakikası{' '}
          </div>
        </div>
      </motion.article>
    </a>
  </Link>
);

export default BlogPost;
