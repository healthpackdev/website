import type { IBlogPostMatter } from '@lib/mdx';
import css from './Blog.module.css';
import dayjs from 'dayjs';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlogPost: React.FC<{ post: IBlogPostMatter }> = ({ post: { data, slug } }) => (
  <article className={css.article}>
    <Link href={`/blog/${slug}`}>
      <a>
        <h2 className="text-blue-500 hover:underline text-3xl">{data.title}</h2>
      </a>
    </Link>
    <p className="m-0">{data.description}</p>
    <div className="mt-2 text-primary space-x-4">
      <span className="hover:text-secondary">
        <FontAwesomeIcon icon={['fas', 'clock']} /> {dayjs(data.publishedAt).fromNow()}
      </span>
      <span className="hover:text-secondary">
        <FontAwesomeIcon icon={['fas', 'eye']} /> {data.views ?? '0'} görüntülenme
      </span>
    </div>
  </article>
);

export default BlogPost;
