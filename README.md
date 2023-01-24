# Next Typescript Boilerplate

This is the Next.js application for Web Frontend Template

### Lighthouse

![Lighthouse Accessibility Badge](./lighthouse/lighthouse_accessibility.svg) ![Lighthouse Best Practices Badge](./lighthouse/lighthouse_best-practices.svg) ![Lighthouse Performance Badge](./lighthouse/lighthouse_performance.svg) ![Lighthouse PWA Badge](./lighthouse/lighthouse_pwa.svg) ![Lighthouse SEO Badge](./lighthouse/lighthouse_seo.svg)

## uTests Coverage Status

| Statements                                                                         | Branches                                                                       | Functions                                                                           | Lines                                                                       |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/statements-77.12%25-red.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-54.23%25-red.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-87.09%25-yellow.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-81.11%25-yellow.svg?style=flat) |

## What chore library inside this repository?

```
- jest & testing-library
- tailwindcss
- tanstack/react-query
- nextjs@latest
- zustand
- axios
- dayjs
```

## Prerequisite

if you are vscode person let's follow our pattern rules to setup editor. otherwise let's ignore this section and jump to the next part.
first of all you should to ensure installed several extension as follow

- last version vscode
- Tailwind CSS IntelliSense
- Prettier
- Eslint
- TODO Highlight

and also ensure install on your machine

```
node ^v18.13.0
pnpm ^7.18.1
```

when preparation are done let's start the installation

- pnpm install

once the process finish
run script `pnpm dev` to run development mode

if want to prod mode
run script bellow

- pnpm build
- pnpm start

Hint:
open suggestion tailwind we can press with `control + space`

## Development

**Run locally as dev mode**

- pnpm install
- pnpm run dev
- open http://localhost:3000

**Build Mode (production)**

- pnpm install
- pnpm build
- pnpm start
- open http://localhost:3000

**uTest**

- pnpm test

**build coverage badge**

- pnpm test:coverage

### Folder Structure

```
src
├── components
│   └── index.ts
├── constants
│   └── index.ts
├── hooks
│   ├── mutations
│   └── queries
│       └── use-todo.ts
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── _offline.tsx
│   ├── api
│   │   └── hello.ts
│   └── index.tsx
├── styles
│   ├── config.scss
│   └── globals.scss
├── types
├── utils
│   ├── axios.ts
│   ├── date.ts
│   └── test-utils.tsx
└── views
    └── homepage
        ├── __test__
        │   ├── __snapshots__
        │   │   └── Homepage.test.tsx.snap
        │   └── homepage.test.tsx
        ├── homepage.tsx
        └── index.ts
```

## Commit

All commit messages should conform to the [conventional commit format](https://www.conventionalcommits.org) and should use following syntax: `type(scope): subject`. While the type is mandatory, the scope is optional.
Examples:

```
docs: add README.md
```

```
fix(Header): fix padding issue
```

```
feat: create Home view
```

Main types are `fix` and `feat`, however it is possible to also use:

- `chore`
- `docs`
- `style`
- `refactor`
- `perf`
- `test`

Additional information can be found [here](https://github.com/KWRI/engineering-resources/blob/develop/git/commit_standards.md)

## Generate lighthouse

1. build application with `npm run build`
2. run app locally `npm run start`
3. run `npx lighthouse-badges --urls http://localhost:3000 -o lighthouse`

## Maintainers

<table>
  <tr>
    <td align="center"><a href="https://github.com/tomibudis"><img src="https://github.com/tomibudis.png?size=100" width="100px;" alt="Tomi Budi"/><br /><sub><b>Tomi Budi</b></sub></a><br /></td>
  </tr>
</table>
