import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./main";
import { SubPage } from "./sub";

export function Routing() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/main.html" element={<MainPage></MainPage>}></Route>
          <Route path="/sub.html" element={<SubPage></SubPage>}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
