import React from "react";
import UserPresent from "./UserPresent";
import * as axios from "axios";
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
} from "../../Redux/users_reduser";
import { getUsers } from "../../api/api";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);

    getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    getUsers(pageNumber, this.props.pageSize)
      .then((data) => {
        this.props.setIsFetching(false);
        this.props.setUsers(data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <UserPresent
          totalUsersCount={this.props.totalUsersCount}
          onPageChanged={this.onPageChanged}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
})(UsersAPIComponent);
