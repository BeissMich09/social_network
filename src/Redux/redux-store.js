import { createStore, combineReducers, applyMiddleware } from "redux";
import reduerProfile from "./profile_reducer";
import reduerDialogues from "./dialogues_reducer";
import reduerFriends from "./friends_reducer";
import reducerUsers from "./users_reduser";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profilePage: reduerProfile,
    dialoguesPage: reduerDialogues,
    friendPage: reduerFriends,
    usersPage: reducerUsers,
    auth: authReducer,
    form: formReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;