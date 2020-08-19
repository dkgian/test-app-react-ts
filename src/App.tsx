import * as React from "react";

import {
  HelloComponent,
  NameEditComponent,
  ColorBrowser,
  ColorPicker,
  SidebarComponent,
  MemberTable,
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
  const [isVisible, setIsVisible] = React.useState(false);

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

  const toogleSidebarVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <HelloComponent userName={name} />

      <SidebarComponent isVisible={isVisible}>
        <ul>
          <li>
            <a href="https://www.imdb.com/title/tt0816692/">Interstellar</a>
          </li>
          <li>
            <a href="https://www.imdb.com/title/tt0083658/">Blade Runner</a>
          </li>
          <li>
            <a href="https://www.imdb.com/title/tt0062622/">
              2001: a space odyssey
            </a>
          </li>
        </ul>
      </SidebarComponent>

      <ColorBrowser color={color} />
      <ColorPicker color={color} onColorUpdate={setColor} />

      <NameEditComponent
        initialUsername={name}
        editingName={editingName}
        onNameUpdate={onNameUpdate}
        onEditingNameUpdate={setEditingName}
        disabled={disabled()}
      />

      <MemberTable />

      <div style={{ float: "right" }}>
        <button onClick={toogleSidebarVisibility}>Toogle sidebar</button>
      </div>
    </>
  );
};
