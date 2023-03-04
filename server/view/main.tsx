import React, { ReactNode } from "react";
import { Layout } from "./layout";
import type express from "express";

export function ServerMainPage(req: express.Request): ReactNode {
  return <Layout js={"main.js"} url={req.url}></Layout>;
}
