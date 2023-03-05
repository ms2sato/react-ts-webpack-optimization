import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { App } from "../isomorphic/app";

export function Routing() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </React.StrictMode>
  );
}
