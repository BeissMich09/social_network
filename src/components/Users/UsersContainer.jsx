import React from "react";
import UserPresent from "./UserPresent";
import * as axios from "axios";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from "../../Redux/users_reduser";

class UsersAPIComponent extends React.Component {
  componentWillMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
   
    return <UserPresent totalUsersCount ={this.props.totalUsersCount} 
    onPageChanged={this.onPageChanged}
    pageSize={this.props.pageSize}
    currentPage={this.props.currentPage}
    users ={this.props.users}
    follow ={this.props.follow}
    unfollow ={this.props.unfollow}/>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage:(pageNumber) =>{
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount:(totalCount) =>{
      dispatch(setUsersTotalCountAC(totalCount))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
