import { createStore, combineReducers } from "redux";
import reduerProfile from "./profile_reducer";
import reduerDialogues from "./dialogues_reducer";
import reduerFriends from "./friends_reducer";
import reducerUsers from "./users_reduser";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
  profilePage: reduerProfile,
  dialoguesPage: reduerDialogues,
  friendPage: reduerFriends,
  usersPage: reducerUsers,
  auth: authReducer,
});
let store = createStore(reducers);

export default store;
