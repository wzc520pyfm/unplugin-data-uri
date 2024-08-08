# unplugin-data-uri

[![NPM version](https://img.shields.io/npm/v/unplugin-data-uri?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-data-uri)

🍣 A universal bundler plugin which imports modules from Data URIs.

## Install

```bash
npm i unplugin-data-uri
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import unpluginDataUri from 'unplugin-data-uri/vite'

export default defineConfig({
  plugins: [
    unpluginDataUri({
      /* options */
    }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import unpluginDataUri from 'unplugin-data-uri/rollup'

export default {
  plugins: [
    unpluginDataUri({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-data-uri/webpack')({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    [
      'unplugin-data-uri/nuxt',
      {
        /* options */
      },
    ],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-data-uri/webpack')({
        /* options */
      }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import unpluginDataUri from 'unplugin-data-uri/esbuild'

build({
  plugins: [unpluginDataUri()],
})
```

<br></details>

## Usage

### Options

For all options please refer to [docs](https://github.com/rollup/plugins/tree/master/packages/data-uri#options).

This plugin accepts all [@rollup/plugin-data-uri](https://github.com/rollup/plugins/tree/master/packages/data-uri#options) options.
