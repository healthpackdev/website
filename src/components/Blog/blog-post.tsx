import type { IBlogPostMatter } from '@lib/mdx';
import css from './Blog.module.css';
import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlogPost: React.FC<{ post: IBlogPostMatter }> = ({ post: { data, slug } }) => (
  <article className={css.article}>
    {/* <div className="md:col-span-2 flex items-bottom">
      <Image
        src={require(`public/images/${data.image}`)}
        objectFit="cover"
        className="rounded-md"
        width="200" // prefer 200x100 near images.
        height="100"
        objectPosition="center center"
        alt={data.title}
      />
</div> */}

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
