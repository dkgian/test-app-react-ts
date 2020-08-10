import * as React from "react";

import "./nameEdit.css";

interface Props {
  initialUsername: string;
  onNameUpdate: () => any;
  editingName: string;
  onEditingNameUpdate: (name: string) => any;
  disabled: boolean;
}

export const NameEditComponent = (props: Props) => {
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onEditingNameUpdate(e.target.value);
  };

  const onNameSubmit = (event: any) => {
    props.onNameUpdate();
  };

  const inputValidator = () => {
    const containUppercaseRegex = /[A-Z]/;
    const containNumberRegex = /[0-9]/;
    const containSpecialCharacter = /[.,@,_]/;

    return (
      !props.editingName.match(containUppercaseRegex) ||
      !props.editingName.match(containNumberRegex) ||
      !props.editingName.match(containSpecialCharacter)
    );
  };

  const showError = () => {};

  return (
    <>
      <label>Update name: </label>
      <input value={props.editingName} onChange={onChangeName} />
      <button
        onClick={onNameSubmit}
        disabled={inputValidator() || props.disabled}
      >
        Change
      </button>
    </>
  );
};
