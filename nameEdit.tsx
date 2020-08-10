import * as React from "react";

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

  return (
    <>
      <label>Update name: </label>
      <input value={props.editingName} onChange={onChangeName} />
      <button onClick={onNameSubmit} disabled={props.disabled}>
        Change
      </button>
    </>
  );
};
