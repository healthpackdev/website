import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { AdminPostInputs } from 'src/pages/admin';

const processRoot = process.cwd();

export interface IBlogPost {
  data: {
    title: string;
    image: string;
    description: string;
    publishedAt: Date;
    minRead: string;
  };
  content: string;
  slug: string;
}

export type IBlogPostMatter = Omit<IBlogPost, 'content'>;

const blogPost = (source: string, slug: string): IBlogPost => {
  let { data, content } = matter(source);

  data = {
    ...data,
    minRead: readingTime(content).minutes,
    publishedAt: data.publishedAt || null,
  };

  return {
    data: data as IBlogPost['data'],
    content,
    slug,
  };
};

export const readContentFiles = (type: string) => {
  const fileNames = fs.readdirSync(path.join(processRoot, 'content', type));
  return fileNames;
};

export const getBySlug = (type: string, slug: string): IBlogPost => {
  const fileSource = fs.readFileSync(path.join(processRoot, 'content', type, `${slug}.mdx`), 'utf-8');
  return blogPost(fileSource, slug);
};

export const getBlogPostMatters = (): IBlogPostMatter[] => {
  const fileNames = readContentFiles('blog');

  return fileNames.reduce((allPosts, currentPost) => {
    const source = fs.readFileSync(path.join(processRoot, 'content', 'blog', currentPost), 'utf-8');
    const slug = currentPost.replace('.mdx', '');
    const post = blogPost(source, slug);

    return [post, ...allPosts];
  }, []);
};

export const mdxTemplate = (body: AdminPostInputs, imageName: string) =>
  `---
title: ${body.title}
image: ${imageName}
description: ${body.description}
publishedAt: ${Number(new Date())}
---

![Image](/images/${imageName})
${body.content}`;
