import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import { Route, BrowserRouter } from "react-router-dom";
import Setting from "./components/Setting/Setting";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar arrayBest={props.state.friendPage.arrayBest}/>
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => (
              <Profile postData={props.state.profilePage.postData} />
            )}
          />
          <Route
            path="/dialogues"
            render={() => (
              <Dialogues
                userArr={props.state.dialoguesPage.userArr}
                messageArr={props.state.dialoguesPage.messageArr}
              />
            )}
          />
          <Route path="/music" render={() => <Music />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/setting" render={() => <Setting />} />
          <Route path="/friends" render={() => <Friends  allFriend={props.state.friendPage.allFriend}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
