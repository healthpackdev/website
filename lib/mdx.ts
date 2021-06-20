import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

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

export const getBlogPosts = (): IBlogPost[] => {
  const fileNames = fs.readdirSync(path.join(processRoot, 'content', 'blog'));
  return fileNames.reduce((allPosts, currentPost) => {
    const source = fs.readFileSync(path.join(processRoot, 'content', 'blog', currentPost), 'utf-8');
    let { data, content } = matter(source);

    data = {
      ...data,
      minRead: readingTime(content).minutes,
      publishedAt: null,
    };


    return [{ data, content, slug: currentPost.replace('.mdx', '') }, ...allPosts];
  }, []);
};
