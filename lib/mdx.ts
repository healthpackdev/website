import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const processRoot = process.cwd();

export interface IBlogPost {
  data: {
    title: string;
    banner?: string;
    description: string;
    publishedAt: Date;
    minRead: string;
  };
  content: string;
  slug: string;
}
export type IBlogPostMatter = Omit<IBlogPost, 'content'>;

const readContent = (type: string) => {
  const fileNames = fs.readdirSync(path.join(processRoot, 'content', type));
  return fileNames;
};

export const getBlogPosts = (): IBlogPost[] => {
  const fileNames = readContent('blog');

  return fileNames.reduce((allPosts, currentPost) => {
    const source = fs.readFileSync(path.join(processRoot, 'content', 'blog', currentPost), 'utf-8');
    let { data, content } = matter(source);

    data = {
      ...data,
      minRead: readingTime(content).minutes,
    };

    return [{ data, content, slug: currentPost.replace('.mdx', '') }, ...allPosts];
  }, []);
};

export const getBlogPostMatters = (): IBlogPostMatter[] => {
  const fileNames = readContent('blog');

  return fileNames.reduce((allPosts, currentPost) => {
    const source = fs.readFileSync(path.join(processRoot, 'content', 'blog', currentPost), 'utf-8');
    let { data, content } = matter(source);

    data = {
      ...data,
      minRead: readingTime(content).minutes,
      publishedAt: data.publishedAt || null,
    };

    return [{ data, slug: currentPost.replace('.mdx', '') }, ...allPosts];
  }, []);
};
