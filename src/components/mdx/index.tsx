import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import img from './image';
import inlineCode from './inline-code';
import pre from './pre';
import a from './link';
import code from './code';

// import prism language
import '@config/prism-languages';

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
