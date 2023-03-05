import React from "react";
import { StaticRouter } from "react-router-dom/server";
import { App } from "../../isomorphic/app";

export function Layout({ js, url }: { js: string; url: string }) {
  return (
    <html>
      <head>
        <title>main</title>
        <meta charSet="utf-8" />
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
