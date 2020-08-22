import * as React from "react";
import { Link } from "react-router-dom";

export const PageB = () => {
  return (
    <div>
      <div>This is page B</div>
      <Link to="/">To page A</Link>
    </div>
  );
};
