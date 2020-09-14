import React, { useEffect, useState } from 'react';

const ProfileStatusWithHoocs = React.memo((props) => {
  let [
    editMode,
    setEditMode,
  ] = useState(false);

  let [
    localStatus,
    setLocalStatus,
  ] = useState(props.status);

  useEffect(
    () => {
      setLocalStatus(props.status);
    },
    [
      props.status,
    ]
  );

  const activateEditeMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(localStatus);
  };

  const onStateUpdate = (element) => {
    let text = element.target.value;
    setLocalStatus(text);
  };

  const editTrue = () => {
    return (
      <div>
        <input
          onChange={onStateUpdate}
          autoFocus={true}
          onBlur={deactivateEditMode}
          value={localStatus ? localStatus : props.status}
          type='text'
        />
      </div>
    );
  };

  const editFalse = () => {
    return (
      <div>
        <span onDoubleClick={activateEditeMode}>{localStatus}</span>
      </div>
    );
  };

  const changeStatus = () => {
    return editMode ? editTrue() : editFalse();
  };

  return <div>{changeStatus()}</div>;
});

export default ProfileStatusWithHoocs;
