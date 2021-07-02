const fs = require('fs');

const MDXTemplate = (slug) =>
  `---
title: title of post
image: og:image of post
description: description of post
publishedAt: ${Number(new Date())}
---

Hello **World**!`;

const slug = process.argv[2];
if (!slug) throw new Error('write slug.');

fs.writeFile(`content/blog/${slug}.mdx`, MDXTemplate(slug), { encoding: 'utf-8' }, (err) => {
  if (err) throw new Error(err);
  console.log('Post template created.');
});
