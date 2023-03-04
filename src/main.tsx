import React from "react";
import { Link } from "react-router-dom";
import { hydrateRoot } from "react-dom/client";
import { Routing } from "./common";

const container = document.getElementById("app");
if (!container) {
  throw new Error("container not found");
}

export function MainPage() {
  return <><h1>これはテストです</h1><div><a href="/sub.html">sub</a><Link to="/sub.html">sub</Link></div></>;
}

hydrateRoot(container, <Routing></Routing>);
