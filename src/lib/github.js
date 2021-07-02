import { request as Request } from '@octokit/request';

export const request = Request.defaults({
  headers: { authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}` },
});
