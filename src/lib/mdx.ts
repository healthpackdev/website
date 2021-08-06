import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { rehypePlugins, remarkPlugins } from '@components/mdx';
import fg from 'fast-glob';

import dayjs from 'dayjs';

const processRoot = process.cwd();
const contentDir = path.join(processRoot, 'content');

export interface IBlogPost {
  data: {
    title: string;
    image: string;
    description: string;
    publishedAt: Date;
    minRead: string;
  };
  mdxSource: MDXRemoteSerializeResult;
  slug: string;
}

export type IBlogPostMatter = Omit<IBlogPost, 'mdxSource'>;

const map = fg.sync('**.mdx', { cwd: contentDir }).map((f) => f.replace(path.extname(f), ''));

const matters = {
  blog(source: string) {
    let { data: frontmatter, content } = matter(source);
    const minReadDuration = dayjs.duration(readingTime(content).time);

    const data = {
      ...frontmatter,
      minRead:
        minReadDuration.asSeconds() > 60
          ? `${minReadDuration.asMinutes().toFixed()} dakika`
          : `${minReadDuration.asSeconds().toFixed()} saniye`,
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

  return await (generators[type] ? generators[type] : generators.default)(fileSource, slug);
};

export const getMatters = (type: string) => {
  const slugs = getParams(type);

  return slugs.reduce((AllSlugs, currentSlug) => {
    const source = fs.readFileSync(path.join(contentDir, type, `${currentSlug}.mdx`), 'utf-8');

    const result = matters[type](source, currentSlug);

    return [{ ...result, slug: currentSlug }, ...AllSlugs];
  }, []);
};
