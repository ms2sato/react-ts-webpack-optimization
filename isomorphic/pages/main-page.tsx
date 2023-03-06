import * as React from "react";
import { Link } from "react-router-dom";

export function Page() {
  return (
    <>
      <h1>This is Main</h1>
      <ul>
        <li>
          <a href="/">index Anchor</a>
        </li>
        <li>
          <Link to="/">index Link</Link>
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
