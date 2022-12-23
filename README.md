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

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```
