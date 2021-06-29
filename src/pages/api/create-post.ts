import type { NextApiHandler } from 'next';
import request from '@lib/octokit';
import fs from 'fs';
import path from 'path';
import siteConfig from '@config/site-config.json';
import author from '@config/author-meta.json';
import { decodeBase64, encodeBase64, decodeBase64File } from '@lib/buffer';
import { MDTemplate } from '@lib/markdown';
import type { AdminPostInputs } from 'src/pages/admin';

const root = process.cwd();

const png = /^data:image\/png;base64,/;

const createPostInDev = (body: AdminPostInputs) => {
  const imageName = `${body.slug}-image.${png.test(body.image) ? 'png' : 'jpeg'}`;
  fs.writeFileSync(path.join(root, 'content', 'blog', `${body.slug}.md`), MDTemplate(body, imageName));
  fs.writeFileSync(path.join(root, 'public', 'images', imageName), decodeBase64File(body.image));
};

const createPostInProd = async (body: AdminPostInputs) => {
  const imageName = `${body.slug}-image.${png.test(body.image) ? 'png' : 'jpeg'}`;
  const content = encodeBase64(MDTemplate(body, imageName));
  const imageContent = body.image.replace(/^data:image\/(png|jpeg);base64,/, '');

  await request('PUT /repos/{owner}/{repo}/contents/{path}', {
    owner: author.github,
    content,
    message: `create blog post named ${body.slug}.md`,
    path: `content/blog/${body.slug}.md`,
    repo: siteConfig.publicRepoName,
    branch: siteConfig.branch,
  });

  await request('PUT /repos/{owner}/{repo}/contents/{path}', {
    owner: author.github,
    content: imageContent,
    message: `create image for ${body.slug}.md`,
    path: `public/images/${imageName}`,
    repo: siteConfig.publicRepoName,
    branch: siteConfig.branch,
  });
};
const createPost: NextApiHandler = async ({ headers, body, method }, res) => {
  if (method === 'POST') {
    const reqToken = decodeBase64(headers.authorization.split(' ')[1]);

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
