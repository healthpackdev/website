import { request } from '@octokit/request';

const client = request.defaults({
  headers: { authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}` },
});

export default client;
