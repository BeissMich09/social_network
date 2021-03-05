import { createStore, combineReducers, applyMiddleware, compose } from "redux";
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

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
// @ts-ignore
window.__store__ = store;

export default store;
