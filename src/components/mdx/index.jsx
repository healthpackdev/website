import img from './Image';
import { MDXRemote } from 'next-mdx-remote';
import { remarkCodeTitle, code, pre, inlineCode } from './Code';
import a from './Link';

export const remarkPlugins = [
  require('remark-slug'),
  [require('remark-autolink-headings'), { linkProperties: { className: ['anchor'] } }],
  remarkCodeTitle,
];
export const rehypePlugins = [];

const components = {
  img,
  code,
  pre,
  inlineCode,
  a,
};
export default function Markdown({ mdxSource }) {
  return <MDXRemote components={components} {...mdxSource} />;
}
