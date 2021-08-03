import img from './Image';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { remarkCodeTitle, code, inlineCode } from './Code';
import pre from './Pre';
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

interface MarkdownProps {
  mdxSource: MDXRemoteSerializeResult;
}

const Markdown: React.FC<MarkdownProps> = ({ mdxSource }) => <MDXRemote components={components} {...mdxSource} />;

export default Markdown;
