import * as React from "react";

interface ColorSliderProps {
  value: number;
  onValueUpdate: (newValue: number) => void;
}

export const ColorSlider = (props: ColorSliderProps) => {
  return (
    <>
      <input
        type="range"
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
