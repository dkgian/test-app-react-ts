import * as React from "react";
import { Color } from "../../model/color";
import { ColorSlider } from "./ColorSlider";

interface Props {
  color: Color;
  onColorUpdate: (color: Color) => void;
}

export const ColorPicker = (props: Props) => {
  const {
    color: { red, green, blue },
    onColorUpdate,
  } = props;
  props.color;

  const updateColor = (props: Props, colorId: keyof Color) => (value) => {
    props.onColorUpdate({
      ...props.color,
      [colorId]: value,
    });
  };

  return (
    <>
      <ColorSlider value={red} onValueUpdate={updateColor(props, "red")} />
      <ColorSlider value={green} onValueUpdate={updateColor(props, "green")} />
      <ColorSlider value={blue} onValueUpdate={updateColor(props, "blue")} />
    </>
  );
};
