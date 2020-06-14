import React from "react";
// import style from "";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
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
    }
  };

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activeteEditMode}>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.activeteEditMode}
              value={this.props.status}
            ></input>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
