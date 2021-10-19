import {
    LOGGED_IN_STATUS,
    LoggedInOptions
} from "./actions.js";
import {combineReducers} from "redux";

function loggedStatusReducer(state = LoggedInOptions.LOGGED_OUT, action){
    switch (action.key) {
        case LOGGED_IN_STATUS:
          return action.status;
        default:
          return state;
    }
}

function getIsHidden(state, action){
    return false;
}


export const rootReducer = combineReducers({
    loggedIn: loggedStatusReducer,
    isHidden: getIsHidden
})