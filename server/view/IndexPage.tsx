import React, { ReactNode } from "react";
import { Layout } from "./Layout";
import type express from "express";

export function IndexPage(req: express.Request): ReactNode {
  return <Layout js={"/index.js"} url={req.url}></Layout>;
}
