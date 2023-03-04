import React from "react";
import { Link } from "react-router-dom";

export function MainPage() {
  return (
    <>
      <h1>これはmainです</h1>
      <ul>
        <li>
          <a href="/sub">sub Anchor</a>
        </li>
        <li>
          <Link to="/sub">sub Link</Link>
        </li>
      </ul>
    </>
  );
}

export function SubPage() {
  return (
    <>
      <h1>これはsubです</h1>
      <ul>
        <li>
          <a href="/main">main Anchor</a>
        </li>
        <li>
          <Link to="/main">main Link</Link>
        </li>
      </ul>
    </>
  );
}
