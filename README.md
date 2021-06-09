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
### Running Locally
```shell
$ git clone https://github.com/healthpackdev/website
# or download as ZIP and extract it
$ cd website
$ npm run dev
# pnpm dev
```

## Config
``config/author-meta.json``
```jsonc
{
  "name": "your_nickname",
  "github": "your_github_username",
  "socials": [
    { "href": "social_url",
     "icon": ["fab", "icon_name"], // /icon_name is redirect url
     "color": "icon_color" },
  ],
  "techs": ["language or framework list"] // available icons are in the public/icons
}
```
``config/fonts.json``
```jsonc
{
  "primary": {
    "url": "https://fonts.googleapis.com/css2?family=font+name:wght@400;500;600;700&display=swap",
    "name": "'font name'"
  },
  "header": {
    "url": "https://fonts.googleapis.com/css2?family=font+name:wght@400;500;600;700&display=swap",
    "name": "'font name'"
  }
}
```
``config/nav-links``
```jsonc
[{ "href": "/url or #id", "title": "link text" }]
```
``config/site-config.json``
```json
{
  "hostName": "site_url"
}
```
``config/netlify-cms.ts``<br>
see https://www.netlifycms.org/docs/configuration-options
``config/seo.ts``<br>
see https://github.com/garmeeh/next-seo#default-seo-configuration
``config/about-text.tsx``<br>
Hero About Text

