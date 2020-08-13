import * as React from "react";
import { Color } from "../../model/color";

interface ColorSliderProps {
  value: number;
  onValueUpdate: (newValue: number) => void;
}

export const ColorSlider = (props: ColorSliderProps) => {
  return (
    <>
      <input
        type="text"
        min="0"
        max="255"
        value={props.value}
        onChange={(e) => props.onValueUpdate(+e.target.value)}
      />
      Value: {props.value}
      <br />
    </>
  );
};
