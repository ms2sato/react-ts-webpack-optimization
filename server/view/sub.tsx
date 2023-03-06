import React, { ReactNode } from "react";
import { Layout } from "./layout";
import type express from "express";

export function ServerSubPage(req: express.Request): ReactNode {
  return <Layout js={"/sub.js"} url={req.url}></Layout>;
}
