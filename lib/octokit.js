import { Octokit } from '@octokit/core';

const client = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

export default client;
