import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Route, withRouter } from "react-router-dom";
import Setting from "./components/Setting/Setting";
import Music from "./components/Music/Music";
import News from "./components/News/News";
// import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";
import DialoguesConnected from "./components/Dialogues/DialoguesContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    console.log("app",this.props.initialized)
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogues" render={() => <DialoguesConnected />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/setting" render={() => <Setting />} />
          <Route path="/users" render={() => <UsersContainer />} />
          {/* <Route
            path="/friends"
            // render={() => (
            //   <Friends allFriend={this.props.state.friendPage.allFriend} />
            )}
          /> */}
          <Route path="/login" render={() => <LoginContainer />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
