import { code, inlineCode } from './Code';
import img from './Image';
import { MDXRemote } from 'next-mdx-remote';

export const remarkPlugins = [
  require('remark-slug'),
  require('remark-autolink-headings'),
  require('remark-gfm'),
  code,
  inlineCode,
];
export const rehypePlugins = [];

const components = {
  img,
};
export default function Markdown({ mdxSource }) {
  return <MDXRemote components={components} {...mdxSource} />;
}
