import * as React from "react";
import { Link } from "react-router-dom";

export const PageA = () => {
  return (
    <div>
      <div>This is page A</div>
      <Link to="/pageB">To page B</Link>
    </div>
  );
};
