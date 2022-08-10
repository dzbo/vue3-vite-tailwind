# Vue3 + Vite + Tailwind CSS

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/dzbo/vue3-vite-tailwind/Test?label=Tests)

This is starter boilerplate for building static websites.

Stack:

- [Vite 3](https://vitejs.dev/guide/)
- [Vue 3](https://vuejs.org/guide/introduction.html)
- [Tailwind CSS 3](https://tailwindcss.com/docs/configuration)
- [Heroicons](https://github.com/tailwindlabs/heroicons#vue)
- [Vue Router](https://github.com/vuejs/router)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
- [Vitest](https://vitest.dev/)
- [asdf](https://asdf-vm.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Github Pages](https://pages.github.com/)

Unplugin Utilities:

- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - components auto import
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - auto import for APIs
- [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) - file based routing for vue-router

## Setup

```sh
npx degit dzbo/vue3-vite-tailwind my-app
cd my-app
```

```sh
npm install
```

## Development

Start the Vite development server on localhost:

```sh
npm run dev
```

Run lint and test to checkout the code:

```sh
npm run lint
npm run test
```

## Deployment

Deployment is automated and triggered by any push to `main` branch.
