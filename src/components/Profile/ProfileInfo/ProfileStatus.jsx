import React from "react";
// import style from "";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activeteEditMode = () => {
    if (!this.state.editMode) {
      this.setState({
        editMode: true,
      });
    } else {
      this.setState({
        editMode: false,
      });
      this.props.updateStatus(this.state.status);
    }
  };

  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  };
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activeteEditMode}>
              {this.props.status || "-------"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.activeteEditMode}
              value={this.state.status}
            ></input>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
