import { createStore, combineReducers } from "redux";
import reduerProfile from "./profile_reducer";
import reduerDialogues from "./dialogues_reducer";
import reduerFriends from "./friends_reducer";

let reducers = combineReducers({
  profilePage: reduerProfile,
  dialoguesPage: reduerDialogues,
  friendPage: reduerFriends,
});
let store = createStore(reducers);

export default store;
