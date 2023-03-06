import * as React from "react";
import { Link } from "react-router-dom";

export function Page() {
  return (
    <>
      <h1>This is Index</h1>
      <ul>
        <li>
          <a href="/main">main Anchor</a>
        </li>
        <li>
          <Link to="/main">main Link</Link>
        </li>
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
