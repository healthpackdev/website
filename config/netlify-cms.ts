import type { CmsConfig } from 'netlify-cms-core';

const netlifyCMSConfig: CmsConfig = {
  backend: {
    name: 'git-gateway',
    branch: 'main',
  },
  media_folder: 'public/img',
  public_folder: '/img',
  collections: [
    {
      name: 'blog',
      label: 'Create Blog Post',
      folder: 'content/blog',
      create: true,
      slug: '{{title}}',
      media_folder: ' public/img',
      public_folder: 'public',
      path: '{{title}}/index',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Publish Date',
          name: 'date',
          widget: 'datetime',
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'string',
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown',
        },
      ],
    },
  ],
};

export default netlifyCMSConfig;
