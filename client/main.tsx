import React from "react";
import { hydrateRoot } from "react-dom/client";
import { Routing } from "./common";

const container = document.getElementById("app");
if (!container) {
  throw new Error("container not found");
}

hydrateRoot(container, <Routing></Routing>);
