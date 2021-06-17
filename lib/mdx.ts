import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const processRoot = process.cwd();

export interface IBlogPost {
  data: {
    image: string;
    title: string;
    description: string;
    publishedAt: Date;
    categories: string[];
  };
  content: string;
  slug: string;
}

export const getBlogPosts = (): IBlogPost[] => {
  const fileNames = fs.readdirSync(path.join(processRoot, 'content', 'blog'));
  return fileNames.reduce((allPosts, currentPost) => {
    const source = fs.readFileSync(path.join(processRoot, 'content', 'blog', currentPost), 'utf-8');
    const { data, content } = matter(source);
    return [{ data, content, slug: currentPost.replace('.mdx', '') }, ...allPosts];
  }, []);
};
