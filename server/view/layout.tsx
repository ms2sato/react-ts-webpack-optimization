import React from "react";
import { StaticRouter } from "react-router-dom/server";
import { App } from "../../isomorphic/App";

export function Layout({ js, url }: { js: string; url: string }) {
  return (
    <html>
      <head>
        <title>{`React SSR with Webpack Optimaization: entry from ${js}`}</title>
        <meta charSet="utf-8" />
        <script src="/vendors.js" defer></script>
        <script src={js} defer></script>
      </head>
      <body>
        <div id="app">
          <StaticRouter location={url}>
            <App></App>
          </StaticRouter>
        </div>
      </body>
    </html>
  );
}
