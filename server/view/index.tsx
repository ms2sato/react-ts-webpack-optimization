import React, { ReactNode } from "react";
import { Layout } from "./layout";
import type express from "express";

export function ServerIndexPage(req: express.Request): ReactNode {
  return <Layout js={"/index.js"} url={req.url}></Layout>;
}
