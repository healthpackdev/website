import { code, inlineCode } from './Code';
import img from './Image';
import { MDXRemote } from 'next-mdx-remote';
import { useEffect } from 'react';

export const remarkPlugins = [
  require('remark-slug'),
  require('remark-autolink-headings'),
  require('remark-gfm'),
  code,
  inlineCode,
];
export const rehypePlugins = [];

function Code({ ...p }) {
  useEffect(() => {
    console.log(p);
  }, []);
  return <></>;
}
const components = {
  img,
  code: Code,
};
export default function Markdown({ mdxSource }) {
  return <MDXRemote components={components} {...mdxSource} />;
}
