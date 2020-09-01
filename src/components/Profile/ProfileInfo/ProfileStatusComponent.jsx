import React from 'react';

class ProfileStatusComponent extends React.Component {
  state = {
    editMode: false,
    localStatus: this.props.status,
  };

  activateEditeMode = () => {
    this.setState({ editMode: true });
  };

  deactivateMode = () => {
    this.setState({ editMode: false });
    this.props.updateUserStatus(this.state.localStatus);
  };

  onStateUpdate = (element) => {
    let text = element.target.value;
    this.setState({ localStatus: text });
  };

  render () {
    const editTrue = () => {
      return (
        <div>
          <input
            onChange={this.onStateUpdate}
            autoFocus={true}
            onBlur={this.deactivateMode}
            value={this.state.localStatus ? this.state.localStatus : 'You need to add you STATUS!'}
            type='text'
          />
        </div>
      );
    };

    const editFalse = () => {
      return (
        <div>
          <span onDoubleClick={this.activateEditeMode}>
            {this.state.localStatus ? this.state.localStatus : 'You need to add you STATUS!'}
          </span>
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
