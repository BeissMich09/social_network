import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import { Route } from "react-router-dom";
import Setting from "./components/Setting/Setting";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";

const App = (props) => {
  console.dir(props);
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar
      //  arrayBest={props.state.friendPage.arrayBest}
      />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile
            // store={props.store}
            />
          )}
        />
        <Route
          path="/dialogues"
          render={() => (
            <Dialogues
            // store={props.store}
            // dialoguesPage={props.state.dialoguesPage}
            />
          )}
        />
        <Route path="/music" render={() => <Music />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/setting" render={() => <Setting />} />
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
