import * as React from "react";
const files = ["main-page", "sub-page"];
const LazyMainPage = React.lazy(() =>
  import(/*webpackChunkName: "[request]" */ `./pages/${files[0]}`).then(
    ({ Page }) => ({
      default: Page,
    })
  )
);
const LazySubPage = React.lazy(() =>
  import(/*webpackChunkName: "[request]" */ `./pages/${files[1]}`).then(
    ({ Page }) => ({
      default: Page,
    })
  )
);

export function MainPage() {
  return (
    <React.Suspense fallback="loading…">
      <LazyMainPage></LazyMainPage>
    </React.Suspense>
  );
}

export function SubPage() {
  return (
    <React.Suspense fallback="loading…">
      <LazySubPage></LazySubPage>
    </React.Suspense>
  );
}
