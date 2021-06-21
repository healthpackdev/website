import { Octokit } from '@octokit/rest';

const client = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

export default client;
