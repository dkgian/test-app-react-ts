import * as React from "react";
import { Color } from "../../model/color";

interface Props {
  color: Color;
  onColorUpdate: (color: Color) => void;
}

export const ColorPicker = (props: Props) => {
  return (
    <div>
      <input
        type="text"
        min="0"
        max="255"
        value={props.color.red}
        onChange={(e) => {
          props.onColorUpdate({
            red: +e.target.value,
            green: props.color.green,
            blue: props.color.blue,
          });
        }}
      />
      R: {props.color.red}
      <hr />
      <input
        type="text"
        min="0"
        max="255"
        value={props.color.green}
        onChange={(e) => {
          props.onColorUpdate({
            red: props.color.red,
            green: +e.target.value,
            blue: props.color.blue,
          });
        }}
      />
      G: {props.color.green}
      <hr />
      <input
        type="text"
        min="0"
        max="255"
        value={props.color.red}
        onChange={(e) => {
          props.onColorUpdate({
            red: props.color.red,
            green: props.color.green,
            blue: +e.target.value,
          });
        }}
      />
      B: {props.color.blue}
    </div>
  );
};
