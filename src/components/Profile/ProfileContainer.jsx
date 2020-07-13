import React from "react";
import classProfile from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../Redux/profile_reducer";
import { withRouter, Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getStatus, updateStatus } from "./../../Redux/profile_reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    // console.log('this.propsthis.props',this.props.response.data)
    let userId = this.props.userId;
    if (!userId) {
      // userId = 2;
      return <Redirect to="/login"/>
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div className={classProfile.content}>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userId: state.auth.userId,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
