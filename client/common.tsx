import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { hydrateRoot } from "react-dom/client";

import { App } from "../isomorphic/App";

function Routing() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export function boot() {
  const container = document.getElementById("app");
  if (!container) {
    throw new Error("container not found");
  }

  hydrateRoot(container, <Routing></Routing>);
}
