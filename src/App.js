import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter, Redirect, HashRouter } from "react-router-dom";
// import Friends from "./components/Friends/Friends";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
// import { HushRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/redux-store";
import { withSuspense } from "./hoc/withSuspens";

const DialoguesConnected = React.lazy(() =>
  import("./components/Dialogues/DialoguesContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const Setting = React.lazy(() => import("./components/Setting/Setting"));
const Music = React.lazy(() => import("./components/Music/Music"));
const News = React.lazy(() => import("./components/News/News"));
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const LoginContainer = React.lazy(() =>
  import("./components/Login/LoginContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/" render={() => <Redirect to={"/login"} />} />
          <Route
            path="/profile/:userId?"
            render={withSuspense(ProfileContainer)}
          />
          <Route path="/dialogues" render={withSuspense(DialoguesConnected)} />
          <Route path="/music" render={withSuspense(Music)} />
          <Route path="/news" render={withSuspense(News)} />
          <Route path="/setting" render={withSuspense(Setting)} />
          <Route path="/users" render={withSuspense(UsersContainer)} />
          {/* <Route
            path="/friends"
            // render={() => (
            //   <Friends allFriend={this.props.state.friendPage.allFriend} />
            )}
          /> */}
          <Route path="/login" render={withSuspense(LoginContainer)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};
export default MainApp;
