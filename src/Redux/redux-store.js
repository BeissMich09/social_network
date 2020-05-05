import { createStore, combineReducers } from "redux";
import reduerProfile from "./profile_reducer";
import reduerDialogues from "./dialogues_reducer";
import reduerFriends from "./friends_reducer";
import reducerUsers from "./users_reduser";

let reducers = combineReducers({
  profilePage: reduerProfile,
  dialoguesPage: reduerDialogues,
  friendPage: reduerFriends,
  usersPage: reducerUsers,
});
let store = createStore(reducers);

export default store;
