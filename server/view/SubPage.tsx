import React, { ReactNode } from "react";
import { Layout } from "./Layout";
import type express from "express";

export function SubPage(req: express.Request): ReactNode {
  return <Layout js={"/sub.js"} url={req.url}></Layout>;
}
