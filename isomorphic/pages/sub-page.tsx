import * as React from "react";
import { Link } from "react-router-dom";

export function Page() {
  return (
    <>
      <h1>This is Sub</h1>
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
