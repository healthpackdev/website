import type { IBlogPostMatter } from '@lib/mdx';
import css from './Blog.module.css';
import dayjs from 'dayjs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const BlogPost: React.FC<{ post: IBlogPostMatter }> = ({ post: { slug, data } }) => (
  <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={css.post + ' hover:shadow-md'}>
    <Link href={`/blog/${slug}`}>
      <a>
        <header className="flex justify-between">
          <h4>{data.title}</h4>
        </header>
      </a>
    </Link>
    <div className={css.postBody}>
      <p>{data.description}</p>
    </div>
    <div className={css.postFooter}>
      <div>{dayjs(data.publishedAt || new Date(2012, 2, 9)).fromNow()}</div>{' '}
      <div>
        <b>{data.minRead}</b> dakikada okursun{' '}
      </div>
    </div>
  </motion.article>
);

export default BlogPost;
