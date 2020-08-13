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
  return (
    <>
      <ColorSlider
        value={red}
        onValueUpdate={(value) =>
          onColorUpdate({
            red: value,
            green: props.color.green,
            blue: props.color.blue,
          })
        }
      />

      <ColorSlider
        value={green}
        onValueUpdate={(value) =>
          onColorUpdate({
            red: props.color.red,
            green: value,
            blue: props.color.blue,
          })
        }
      />

      <ColorSlider
        value={blue}
        onValueUpdate={(value) =>
          onColorUpdate({
            red: props.color.red,
            green: props.color.green,
            blue: value,
          })
        }
      />
    </>
  );
};
