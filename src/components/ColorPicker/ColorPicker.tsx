import * as React from "react";

import { ColorSlider } from "./ColorSlider";
import { Color } from "../../model";

interface Props {
  color: Color;
  onColorUpdate: (color: Color) => void;
}

export const ColorPicker = (props: Props) => {
  const {
    color: { red, green, blue },
    onColorUpdate,
  } = props;

  const updateColor = (props: Props, colorId: keyof Color) => (value) => {
    props.onColorUpdate({
      ...props.color,
      [colorId]: value,
    });
  };

  return (
    <>
      {Object.keys(props.color).map((field: keyof Color) => (
        <ColorSlider
          key={field}
          value={props.color[field]}
          onValueUpdate={updateColor(props, field)}
        />
      ))}
    </>
  );
};
