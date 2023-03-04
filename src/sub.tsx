import React from "react";
import { Link } from "react-router-dom";
import { hydrateRoot } from "react-dom/client";
import { Routing } from "./common";

const container = document.getElementById("app");
if (!container) {
  throw new Error("container not found");
}

export function SubPage() {
  return <><h1>これはsubです</h1><div><a href="/main.html">main</a><Link to="/main.html">main</Link></div></>;
}

hydrateRoot(container, <Routing></Routing>);