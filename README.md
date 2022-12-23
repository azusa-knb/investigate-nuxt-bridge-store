# investigate-nuxt-bridge-store

## Migrate nuxt2 to nuxt bridge

### What i did

1. Create nuxt2 project

```bash
   npm init nuxt-app investigate-nuxt-bridge-store
```

2. Migrate nuxt2 to nuxt bridge

- Step is here<br>
  https://nuxt.com/docs/bridge/overview

- Remove buildModules in nuxt.config

- For the error 'Named export 'provider' not found - std-env'<br>
  https://github.com/nuxt/framework/issues/4319

## Migrate vuex3 to pinia with nuxt bridge (Don't use composition API)

### What i did

1. Install pinia

```bash
npm install @pinia/nuxt
```

- Step is here <br>
  https://pinia.vuejs.org/ssr/nuxt.html

- For the error 'Cannot find module 'pinia/dist/pinia.mjs' <br>
  https://stackoverflow.com/questions/74003458/cannot-find-module-pinia-dist-pinia-mjs-when-using-run-dev

2. Modify for when the composition API is not used

- Step is here <br>
  https://pinia.vuejs.org/cookbook/options-api.html

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```
