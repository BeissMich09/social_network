import "./index.css";
import * as serviceWorker from "./serviceWorker";
import state, { subscribe } from "./Redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {addPost, newPostTextChange, sendMessage, newMessageTextChange} from "./Redux/state";
import { BrowserRouter } from "react-router-dom";

 let rerenderEntireTree = state => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        newPostTextChange={newPostTextChange}
        newMessageTextChange={newMessageTextChange}
        sendMessage={sendMessage}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
