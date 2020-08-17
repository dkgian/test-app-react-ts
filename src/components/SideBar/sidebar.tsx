import * as React from "react";

const classNames = require("./sidebar.css");

interface Props {
  isVisible: boolean;
}

const divStyle = (props: Props): React.CSSProperties => ({
  width: props.isVisible ? "23rem" : "0rem",
});

export const SidebarComponent = (props: Props) => (
  <div id="mySidenav" className={classNames.sidenav} style={divStyle(props)}>
    <h1>Basic side bar, first steps</h1>
  </div>
);