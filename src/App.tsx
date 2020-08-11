import * as React from "react";
import { HelloComponent } from "./components/Hello";
import { NameEditComponent } from "./components/NameEdit/NameEdit";

export const App = () => {
  const [name, setName] = React.useState("default name");
  const [editingName, setEditingName] = React.useState("default name");

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

      <NameEditComponent
        initialUsername={name}
        editingName={editingName}
        onNameUpdate={onNameUpdate}
        onEditingNameUpdate={setEditingName}
        disabled={disabled()}
      />
    </>
  );
};
