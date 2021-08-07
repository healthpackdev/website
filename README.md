# [healthpackdev.cf](https://healthpackdev.cf)

<p align="center">
  <img src=".github/preview.png" />
</p>

<p align="center">
 <img src="https://img.shields.io/github/forks/healthpackdev/website?label=Forks&logo=github&style=flat-square">
 <img src="https://img.shields.io/github/stars/healthpackdev/website?label=Stars&logo=github&style=flat-square"><br>
 <a href="https://vercel.com/new/git/external?repository-url=https://github.com/healthpackdev/website"><img alt="deploy with vercel" src="https://vercel.com/button"></a>
 <a href="https://app.netlify.com/start/deploy?repository=https://github.com/healthpackdev/website"><img alt="deploy with netlify" src="https://www.netlify.com/img/deploy/button.svg"></a>
</p>

# Overview

In a week, I build a personal website for me. It has fully static pages so you can host it anywhere. It is written in typescript and it uses React as a front-end library for ssr uses Next.js.

# Getting Started

### Requriments

- Node.js
- Git or Download repository as ZIP
- **Recommended**: pnpm faster than **yarn** and **npm**

### Enviroment variables

- `GITHUB_ACCESS_TOKEN`

Your personal Github access token
see https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token

- `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET`

Your Spotify client credentials with callback your website
see https://developer.spotify.com/documentation/general/guides/app-settings/

- `SPOTIFY_REFRESH_TOKEN`

Your Spotify user refresh_token
see how to get a refresh_token https://benwiz.com/blog/create-spotify-refresh-token/

### Running Locally

```shell
$ git clone https://github.com/healthpackdev/website
# or download as ZIP and extract it
$ cd website
$ npm run dev
# pnpm dev
```
