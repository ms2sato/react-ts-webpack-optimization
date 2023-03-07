# What is this?

Example code of React with TypeScript and Webpack

- React v18 SSR and hydration
- Webpack optimization for chunks of Page
- TypeScript

# How to use

```
$ npm i
$ npm run build
$ npm run dev
```

and access to http://localhost:3000

# Points of implmentation

## React SSR

- Routes of react-router-dom is shared with server and client, located on isomorphic directory
- renderToPipeableStream is used for response on server
- hydrateRoot is used for each entry point on client

## Webpack

- `webpackChunkName: "[request]"` is used for importing any Page Component
- optimization.splitChunks is used for sharing code of each entry point

## TypeScript

- `"module": "commonjs"` is set for fitting Webpack and tsc compile, esm style is maybe not supported for Webpack(really?)