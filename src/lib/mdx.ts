import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import fg from 'fast-glob';
import dayjs from 'dayjs';

import { rehypeSyntaxHighlight } from './mdx-plugins';

const remarkPlugins = [
  require('remark-slug'),
  [require('remark-autolink-headings'), { linkProperties: { className: ['anchor'] } }],
];

const rehypePlugins = [rehypeSyntaxHighlight];

const processRoot = process.cwd();
const contentDir = path.join(processRoot, 'content');

export interface BlogPost {
  data: {
    title: string;
    image: string;
    description: string;
    publishedAt: number;
    minRead: string;
  };
  mdxSource: MDXRemoteSerializeResult;
  slug: string;
}

export type BlogPostMatter = Omit<BlogPost, 'mdxSource'>;

const map = fg.sync('**.mdx', { cwd: contentDir }).map((f) => f.replace(path.extname(f), ''));

const matters = {
  blog(source: string) {
    let { data: frontmatter, content } = matter(source);
    const minReadDuration = dayjs.duration(readingTime(content).time);

    const seconds = minReadDuration.asSeconds();
    const isMinute = seconds > 60;

    const data = {
      ...frontmatter,
      minRead: isMinute ? `${minReadDuration.asMinutes().toFixed()} dakika` : `${seconds.toFixed()} saniye`,
      publishedAt: frontmatter.publishedAt || null,
    };

    return {
      data,
      content,
    };
  },
  default(source: string) {
    const rest = matter(source);

    return rest;
  },
};

const generators = {
  async blog(source: string, slug: string) {
    const { data, content } = matters.blog(source);

    const mdxSource = await serialize(content, { mdxOptions: { remarkPlugins, rehypePlugins } });

    return {
      data,
      mdxSource,
      slug,
    };
  },

  async default(source: string, slug: string) {
    const { data, content } = matters.default(source);
    const mdxSource = await serialize(content, { mdxOptions: { remarkPlugins, rehypePlugins } });

    return { data, mdxSource, slug };
  },
};

export const getParams = (type: string) => {
  const slugs = map
    .filter((fileName) => {
      return fileName.split('/')[0] === type;
    })
    .map((fileName) => fileName.replace(`${type}/`, ''));

  return slugs;
};

export const getByPath = async (type: string, ...pathname: string[]) => {
  const full = path.join(type, ...pathname);

  const slug = map.find((f) => f === full);
  const fileSource = fs.readFileSync(path.join(contentDir, `${slug}.mdx`), 'utf8');
  const fn = generators[type] ? generators[type] : generators.default;

  return await fn(fileSource, slug);
};

export const getMatters = (type: string) => {
  const slugs = getParams(type);

  return slugs.map((slug) => {
    const source = fs.readFileSync(path.join(contentDir, type, `${slug}.mdx`), 'utf-8');

    const data = matters[type](source, slug);

    return { ...data, slug };
  }, []);
};
