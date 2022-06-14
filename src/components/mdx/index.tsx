import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import img from './image';
import pre from './pre';
import a from './link';
import React from 'react';

const defaultComponents: any = {
  img,
  pre,
  a,
};

interface MDXProps {
  mdxSource: MDXRemoteSerializeResult;
  scope?: Record<string, any>;
  components?: any;
}

const MDX: React.FC<MDXProps> = ({ mdxSource, components, ...props }) => (
  <MDXRemote components={{ ...defaultComponents, ...components }} {...mdxSource} {...props} />
);

export default MDX;
