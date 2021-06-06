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

In a week, I build a personal website for me. It has fully static pages so you can host it anywhere. It is written in typescript and it uses React as a front-end library for ssr uses Next.js. `Update Will come`!

# Getting Started

### Requriments

- Node.js
- Git or Download repository as ZIP
- **Recommended**: pnpm faster than **yarn** and **npm**
### Local Development

First of all, clone this repository with 
```shell
git clone https://github.com/healthpackdev/website
# or download as ZIP and extract it
```
After write
```shell
cd website
```
for start app in development mode write
```shell
npm run dev
# pnpm dev
```

### Local Production
configure `config/site-config.json` after 
```shell
npm run build
npm run start
# pnpm build
# pnpm start
```

### Deploy
You can deploy with `Netlify` and `Vercel`

 <a href="https://vercel.com/new/git/external?repository-url=https://github.com/healthpackdev/website"><img alt="deploy with vercel" src="https://vercel.com/button"></a>
 <a href="https://app.netlify.com/start/deploy?repository=https://github.com/healthpackdev/website"><img alt="deploy with netlify" src="https://www.netlify.com/img/deploy/button.svg"></a>

**NOTE**: if you deploy with vercel you should configure `Build & Development Settings` such as:

<p align="center" ><img src=".github/NOTE.png" alt="note image"></p>