import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage, SubPage } from "./pages";

export function App() {
  return (
    <Routes>
      <Route path="/main" element={<MainPage></MainPage>}></Route>
      <Route path="/sub" element={<SubPage></SubPage>}></Route>
    </Routes>
  );
}
