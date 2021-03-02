import React from "react";
import UserPresent from "./UserPresent";
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {
  follow,
  unfollow,
  setCurrentPage,
  getUsersThunk,
} from "../../Redux/users_reduser";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Paginator from "../common/Paginator/Paginator";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  // getUsersSuperSelector,
} from "../../Redux/users-selectors";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  };

  render() {
    return (
      <>
        <Paginator
          totalItemsCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChanged}
        />
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <UserPresent
            totalUsersCount={this.props.totalUsersCount}
            onPageChanged={this.onPageChanged}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </>
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     followingInProgress: state.usersPage.followingInProgress,
//     isFetching: state.usersPage.isFetching,
//   };
// };

let mapStateToProps = (state) => {
  return {
    // users:getUsersSuperSelector(state),
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    followingInProgress: getFollowingInProgress(state),
    isFetching: getIsFetching(state),
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers: getUsersThunk,
  })
)(UsersAPIComponent);
