import * as React from "react";
import { HelloComponent } from "./hello";
import { NameEditComponent } from "./nameEdit";

export const App = () => {
  const [name, setName] = React.useState("default name");
  const [editingName, setEditingName] = React.useState("default name");

  const loadUsername = () => {
    setTimeout(() => {
      setName("name from async call");
      setEditingName("name from asyn call");
    }, 2000);
  };

  React.useEffect(() => {
    loadUsername();
  }, []);

  const onNameUpdate = () => {
    setName(editingName);
  };

  const shouldDisableButton = () => {
    const containUppercaseRegex = /[A-Z]/;
    const containNumberRegex = /[0-9]/;
    const containSpecialCharacter = /[.,@,_]/;

    return (
      editingName === "" ||
      editingName === name ||
      !editingName.match(containUppercaseRegex) ||
      !editingName.match(containNumberRegex) ||
      !editingName.match(containSpecialCharacter)
    );
  };

  return (
    <>
      <HelloComponent userName={name} />

      <NameEditComponent
        initialUsername={name}
        editingName={editingName}
        onNameUpdate={onNameUpdate}
        onEditingNameUpdate={setEditingName}
        disabled={shouldDisableButton()}
      />
    </>
  );
};
