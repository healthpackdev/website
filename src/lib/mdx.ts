import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { rehypePlugins, remarkPlugins } from '@components/mdx';

import dayjs from 'dayjs';

const processRoot = process.cwd();

export interface IBlogPost {
  data: {
    title: string;
    image: string;
    description: string;
    publishedAt: Date;
    minRead: string;
    views?: number;
  };
  mdxSource: MDXRemoteSerializeResult;
  slug: string;
}

export type IBlogPostMatter = Omit<IBlogPost, 'mdxSource'>;

const generateBlogPostMatter = (source: string, slug: string): IBlogPostMatter => {
  let { data, content } = matter(source);
  const minReadDuration = dayjs.duration(readingTime(content).time);

  data = {
    ...data,
    minRead:
      minReadDuration.asSeconds() > 60
        ? `${minReadDuration.asMinutes().toFixed()} dakika`
        : `${minReadDuration.asSeconds().toFixed()} saniye`,
    publishedAt: data.publishedAt || null,
  };

  return {
    data: data as IBlogPost['data'],
    slug,
  };
};

const generateBlogPost = async (source: string, slug: string) => {
  let { data } = generateBlogPostMatter(source, slug);

  const { content } = matter(source);

  const mdxSource = await serialize(content, { mdxOptions: { remarkPlugins, rehypePlugins } });

  return {
    data,
    mdxSource,
    slug,
  };
};

export const readContentFiles = (type: string) => {
  const fileNames = fs.readdirSync(path.join(processRoot, 'content', type));
  return fileNames;
};

export const getBySlug = async (type: string, slug: any) => {
  const fileSource = fs.readFileSync(path.join(processRoot, 'content', type, `${slug}.mdx`), 'utf-8');
  return await generateBlogPost(fileSource, slug);
};

export const getBlogPostMatters = () => {
  const fileNames = readContentFiles('blog');

  return fileNames.reduce((allPosts, currentPost) => {
    const source = fs.readFileSync(path.join(processRoot, 'content', 'blog', currentPost), 'utf-8');
    const slug = currentPost.replace('.mdx', '');

    const post = generateBlogPostMatter(source, slug);

    return [post, ...allPosts];
  }, []);
};

/*
 const MDXTemplate = (body: Omit<AdminPostInputs, 'image'>, imageName: string) =>
  `---
title: ${body.title}
image: ${imageName}
description: ${body.description}
publishedAt: ${Number(new Date())}
---

${body.content}`;

*/
