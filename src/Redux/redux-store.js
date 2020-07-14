import { createStore, combineReducers, applyMiddleware } from "redux";
import reducerProfile from "./profile_reducer";
import reducerDialogues from "./dialogues_reducer";
import reducerFriends from "./friends_reducer";
import reducerUsers from "./users_reduser";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
  profilePage: reducerProfile,
  dialoguesPage: reducerDialogues,
  friendPage: reducerFriends,
  usersPage: reducerUsers,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;
