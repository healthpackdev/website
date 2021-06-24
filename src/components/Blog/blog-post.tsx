import type { IBlogPostMatter } from 'src/lib/mdx';
import css from './Blog.module.css';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBookReader, faEye } from '@fortawesome/free-solid-svg-icons';
import useSWR from 'swr';

const fetcher = async (...args) => {
  const res = await fetch(`/api/views?path=/blog/${args.join('')}`);
  return res.json();
};

const BlogPost: React.FC<{ post: IBlogPostMatter }> = ({ post: { data, slug } }) => {
  const { data: res } = useSWR(slug, fetcher);

  return (
    <motion.article
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`md:!grid grid-cols-7 gap-x-2`.concat(' ', css.article)}
    >
      <div className="md:col-span-2 flex items-bottom">
        <Image
          src={require(`public/images/${data.image}`)}
          objectFit="cover"
          className="rounded-md"
          objectPosition="center center"
          alt={data.title}
        />
      </div>

      <div className="md:col-span-5">
        <Link href={`/blog/${slug}`}>
          <a>
            <header className="text-blue-500 hover:underline">{data.title}</header>
          </a>
        </Link>
        <p>{data.description}</p>
        <div className="mt-2 text-primary flex-wrap flex justify-between">
          <span className="hover:text-secondary">
            <FontAwesomeIcon icon={faClock} className="mr-1" /> {dayjs(data.publishedAt).fromNow()}
          </span>
          <span className="hover:text-secondary">
            <FontAwesomeIcon icon={faEye} className="mr-1" /> {res?.views ?? '---'} görüntülenme
          </span>
          <span className="hover:text-secondary">
            <FontAwesomeIcon icon={faBookReader} className="mr-1" />
            {Number(data.minRead).toFixed()} dakika okuma
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPost;
