# Contributing

I would love for your contributions, here are the guidelines I would like you to follow.

- [Commit Messages](#commit-messages)

# Guidelines

## Commit Messages

Just suit to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) with these enums:

- `feat`
- `docs`
- `refactor`
- `style`
- `chore`
- `build`
- `fix`
- `revert`
- `ui`: update of ui design

then commit

```shell
$ git commit -m 'fix: my fix'
```

# Setup the Project

first of all, fork this repository from `github`
then clone your forked repository.

```shell
$ git clone https://github.com/<your_github_username>/website
$ cd website
```

Create a branch for your contribute or use `main` branch

```shell
$ git branch -m 'my-fix-name'
```

Your repository setup ready, let's setup enviroment.

I'm using `pnpm` in this project you can see `pnpm-lock.yaml`. install `pnpm` or just use `npm` (slowest install)

```shell
$ npm install -g pnpm
```

Install dependencies and start app in development.

```shell
$ pnpm install
$ pnpm dev
```

Now you are ready to development make your code update.

# Pull Request

You don't need to suit a Pull request template just add a description.

```shell
$ git add <my-changed-files>
$ git commit -m '<type>: <description>'
$ git push origin <your-branch>
```

Now go your forked repository in `github`.<br>
[Open a pull request from your repository](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) then wait me!
