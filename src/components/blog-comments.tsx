import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

import siteConfig from '@config/site-config.json';
import author from '@config/author-meta.json';

const BlogComments = () => {
  const isDark = useTheme().theme === 'dark';

  return (
    <Giscus
      repo={`${author.github}/${siteConfig.publicRepoName}`}
      repoId={siteConfig.giscusRepoId}
      category="General"
      categoryId={siteConfig.giscusCategoryId}
      theme={isDark ? 'transparent_dark' : 'light'}
      emitMetadata="0"
      lang="tr"
      reactionsEnabled="1"
      mapping="pathname"
    />
  );
};

export default BlogComments;
