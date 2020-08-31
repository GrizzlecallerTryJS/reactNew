import React from 'react';

class ProfileStatusComponent extends React.Component {
  state = {
    editMode: false,
  };

  activateEditeMode = () => {
    this.setState({ editMode: true });
  };

  deactivateMode = () => {
    this.setState({ editMode: false });
  };

  render () {
    const editTrue = () => {
      return (
        <div>
          <input autoFocus={true} onBlur={this.deactivateMode} value={this.props.status} type='text' />
        </div>
      );
    };

    const editFalse = () => {
      return (
        <div>
          <span onDoubleClick={this.activateEditeMode}>{this.props.status}</span>
        </div>
      );
    };

    const changeStatus = () => {
      return this.state.editMode ? editTrue() : editFalse();
    };

    return <div>{changeStatus()}</div>;
  }
}

export default ProfileStatusComponent;
