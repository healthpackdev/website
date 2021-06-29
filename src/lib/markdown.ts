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
    views?: number;
  };
  markdown: string;
  slug: string;
}

export type IBlogPostMatter = Omit<IBlogPost, 'markdown'>;

const generateBlogPostMatter = (source: string, slug: string): IBlogPostMatter & IBlogPost => {
  let { data, content } = matter(source);

  data = {
    ...data,
    minRead: readingTime(content).time,
    publishedAt: data.publishedAt || null,
  };

  return {
    data: data as IBlogPost['data'],
    markdown: content,
    slug,
  };
};

const generateBlogPost = (source: string, slug: string) => {
  let { data, markdown } = generateBlogPostMatter(source, slug);

  return {
    data,
    markdown,
    slug,
  };
};

export const readContentFiles = (type: string) => {
  const fileNames = fs.readdirSync(path.join(processRoot, 'content', type));
  return fileNames;
};

export const getBySlug = (type: string, slug: string) => {
  const fileSource = fs.readFileSync(path.join(processRoot, 'content', type, `${slug}.md`), 'utf-8');
  return generateBlogPost(fileSource, slug);
};

export const getBlogPostMatters = () => {
  const fileNames = readContentFiles('blog');

  return fileNames.reduce((allPosts, currentPost) => {
    const source = fs.readFileSync(path.join(processRoot, 'content', 'blog', currentPost), 'utf-8');
    const slug = currentPost.replace('.md', '');

    const post = generateBlogPostMatter(source, slug);

    return [post, ...allPosts];
  }, []);
};

export const MDTemplate = (body: AdminPostInputs, imageName: string) =>
  `---
title: ${body.title}
image: ${imageName}
description: ${body.description}
publishedAt: ${Number(new Date())}
---

${body.content}`;
