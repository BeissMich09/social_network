import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  addPost,
  newPostTextChange,
  sendMessage,
  newMessageTextChange
} from "./Redux/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = state => {
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
