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

const defaultComponents = {
  img,
  code,
  pre,
  inlineCode,
  a,
};

interface MDXProps {
  mdxSource: MDXRemoteSerializeResult;
  scope?: Record<string, any>;
  components?: Record<string, React.ReactNode>;
}

const MDX: React.FC<MDXProps> = ({ mdxSource, components, ...props }) => (
  <MDXRemote components={{ ...defaultComponents, ...components }} {...mdxSource} {...props} />
);

export default MDX;
