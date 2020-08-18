import * as React from "react";
import { Color } from "../../model";

interface Props {
  color: Color;
}

export const ColorBrowser = (props: Props) => {
  const style: React.CSSProperties = {
    width: "11rem",
    height: "7rem",
    backgroundColor: `rgb(${props.color.red},${props.color.green}, ${props.color.blue})`,
  };

  return <div style={style}>color browser component</div>;
};
