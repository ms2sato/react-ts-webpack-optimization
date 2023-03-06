import * as React from "react";
import { Routes, Route } from "react-router-dom";

const files = ["index-page", "main-page", "sub-page"];

const lazyImportPage = (pagePath: string) => {
  return React.lazy(() =>
    import(/*webpackChunkName: "[request]" */ `./pages/${pagePath}`).then(
      ({ Page }) => ({
        default: Page,
      })
    )
  );
};

const IndexPage = lazyImportPage(files[0]);
const MainPage = lazyImportPage(files[1]);
const SubPage = lazyImportPage(files[2]);

export function App() {
  return (
    <React.Suspense fallback="loading…">
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/sub" element={<SubPage />}></Route>
      </Routes>
    </React.Suspense>
  );
}
