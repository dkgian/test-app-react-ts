import * as React from "react";

const classNames = require("./sidebar.css");

interface Props {
  isVisible: boolean;
}

const divStyle = (props: Props): React.CSSProperties => ({
  width: props.isVisible ? "30%" : "0%",
});

export const SidebarComponent: React.FunctionComponent<Props> = (props) => (
  <div id="mySidenav" className={classNames.sidenav} style={divStyle(props)}>
    {props.children}
  </div>
);
