import type { NextApiHandler } from 'next';
import client from '@lib/octokit';
import fs from 'fs';
import path from 'path';
import siteConfig from '@config/site-config.json';
import author from '@config/author-meta.json';

const createPostInDev = (body: Record<string, string>) => {
  fs.writeFileSync(
    path.join(process.cwd(), 'content', 'blog', `${body.slug}.mdx`),
    `---
title: ${body.title}
description: ${body.description}
publishedAt: ${Number(new Date())}
---
${body.content}`
  );
};

const createPostInProd = async ({ slug, content }: Record<string, string>) => {
  await client('PUT /repos/{owner}/{repo}/contents/{path}', {
    owner: author.github,
    content,
    message: `create ${slug}.mdx`,
    path: `content/blog/${slug}.mdx`,
    repo: siteConfig.publicRepoName,
    branch: siteConfig.branch,
  });
};

const convertToString = (content: string, encoding: BufferEncoding) => Buffer.from(content, encoding).toString();

const createPost: NextApiHandler = async ({ headers, body, method }, res) => {
  if (method === 'POST') {
    const reqToken = convertToString(headers.authorization.split(' ')[1], 'base64');

    if (reqToken !== process.env.ADMIN_TOKEN) {
      res.status(401).send('Unauthorized');
    } else {
      if (process.env.NODE_ENV !== 'production') {
        createPostInDev(body);
      } else {
        await createPostInProd(body);
      }

      res.status(200).json(body);
    }
  }
};

export default createPost;
