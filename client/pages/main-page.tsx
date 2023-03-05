import * as React from "react";
import { Link } from "react-router-dom";

export function Page() {
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
