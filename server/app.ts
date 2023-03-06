import path from "path";
import express from "express";
import http from "http";
import logger from "morgan";
import { IndexPage } from "./view/IndexPage";
import { MainPage } from "./view/MainPage";
import { SubPage } from "./view/SubPage";

import { renderToPipeableStream } from "react-dom/server";
import { ReactNode } from "react";

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

const renderView = (res: express.Response, view: ReactNode) => {
  let didError = false;
  const stream = renderToPipeableStream(view, {
    onShellReady() {
      res.statusCode = didError ? 500 : 200;
      res.setHeader("Content-type", "text/html; charset=UTF-8");
      stream.pipe(res);
    },
    onShellError(err) {
      console.error(err);

      res.statusCode = 500;
      res.setHeader("Content-type", "text/html; charset=UTF-8");
      res.send("Fatal Error");
    },
    onAllReady() {
      // nop
    },
    onError(err) {
      didError = true;
      console.error(err);
    },
  });
};

app.get("/", (req, res) => {
  renderView(res, IndexPage(req));
});

app.get("/main", (req, res) => {
  renderView(res, MainPage(req));
});

app.get("/sub", (req, res) => {
  renderView(res, SubPage(req));
});

const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`listen http://localhost:${port}`);
});
