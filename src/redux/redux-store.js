import { createStore, combineReducers } from "redux";
import { dialogs_reducer } from "./dialogs_reducer";
import { profile_reducer } from "./profile_reducer";
import { navbar_reducer } from "./navbar_reducer";

let reducers = combineReducers({
    profile: profile_reducer,
    dialogs: dialogs_reducer,
    navbar: navbar_reducer,
});

let store = createStore(reducers);

export default store;