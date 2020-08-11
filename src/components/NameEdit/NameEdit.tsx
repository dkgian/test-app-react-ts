import * as React from "react";

import "./NameEdit.css";

interface Props {
  initialUsername: string;
  onNameUpdate: () => any;
  editingName: string;
  onEditingNameUpdate: (name: string) => any;
  disabled: boolean;
}

export const NameEditComponent = (props: Props) => {
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    props.onEditingNameUpdate(currentValue);
  };

  const onNameSubmit = (event: any) => {
    props.onNameUpdate();
  };

  const containUppercaseValidation = (inputText: string) => {
    const containUppercaseRegex = /[A-Z]/;
    return !inputText.match(containUppercaseRegex);
  };

  const containNumberValidation = (inputText: string) => {
    const containNumberRegex = /[0-9]/;
    return !inputText.match(containNumberRegex);
  };

  const containSpecialCharacterValidation = (inputText: string) => {
    const containSpecialCharacter = /[.,@,_]/;
    return !inputText.match(containSpecialCharacter);
  };

  const inputValidate = () => {
    return (
      containUppercaseValidation(props.editingName) ||
      containNumberValidation(props.editingName) ||
      containSpecialCharacterValidation(props.editingName)
    );
  };

  return (
    <>
      <label>Update name: </label>
      <input value={props.editingName} onChange={onChangeName} />
      {containUppercaseValidation(props.editingName) && (
        <label className="error">require [A-Z]</label>
      )}

      {containNumberValidation(props.editingName) && (
        <label className="error">require [0-9]</label>
      )}

      {containSpecialCharacterValidation(props.editingName) && (
        <label className="error">require [.,@,_]</label>
      )}

      <button
        onClick={onNameSubmit}
        disabled={inputValidate() || props.disabled}
      >
        Change
      </button>
    </>
  );
};
