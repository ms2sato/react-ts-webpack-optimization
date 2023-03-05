import * as React from "react";
import { hydrateRoot } from "react-dom/client";
import { Routing } from "./common";

console.log("main entry");

const container = document.getElementById("app");
if (!container) {
  throw new Error("container not found");
}

hydrateRoot(container, <Routing></Routing>);
