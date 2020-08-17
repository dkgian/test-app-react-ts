import * as React from "react";

import {
  HelloComponent,
  NameEditComponent,
  ColorBrowser,
  ColorPicker,
  SidebarComponent,
} from "./components";
import { Color } from "./model/color";

export const App = () => {
  const [name, setName] = React.useState("default name");
  const [editingName, setEditingName] = React.useState("default name");
  const [color, setColor] = React.useState<Color>({
    red: 60,
    green: 60,
    blue: 60,
  });
  const [isVisible, setIsVisible] = React.useState(false)

  const loadUsername = () => {
    setTimeout(() => {
      setName("name from async call");
      setEditingName("name from async call");
    }, 2000);
  };

  React.useEffect(() => {
    loadUsername();
  }, []);

  const onNameUpdate = () => {
    setName(editingName);
  };

  const disabled = () => {
    return editingName === "" || editingName === name;
  };

  return (
    <>
      <HelloComponent userName={name} />
      <SidebarComponent isVisible={isVisible} />

      <ColorBrowser color={color} />
      <ColorPicker color={color} onColorUpdate={setColor} />

      <NameEditComponent
        initialUsername={name}
        editingName={editingName}
        onNameUpdate={onNameUpdate}
        onEditingNameUpdate={setEditingName}
        disabled={disabled()}
      />

      <div style={{ float: "right"}}>
        <button onClick={() => setIsVisible(!isVisible)}>
          Toogle sidebar
        </button>
      </div>
    </>
  );
};
