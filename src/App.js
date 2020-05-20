import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Dialogues from "./components/Dialogues/Dialogues";
import { Route } from "react-router-dom";
import Setting from "./components/Setting/Setting";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogues" render={() => <Dialogues />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/setting" render={() => <Setting />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route
          path="/friends"
          render={() => (
            <Friends allFriend={props.state.friendPage.allFriend} />
          )}
        />
      </div>
    </div>
  );
};

export default App;
