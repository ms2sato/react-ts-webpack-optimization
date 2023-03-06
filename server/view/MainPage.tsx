import React, { ReactNode } from "react";
import { Layout } from "./Layout";
import type express from "express";

export function MainPage(req: express.Request): ReactNode {
  return <Layout js={"/main.js"} url={req.url}></Layout>;
}
