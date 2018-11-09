import { AnyAction, combineReducers } from "redux";
import { HANDLE_ERRORS } from "../actions/types";
import pagesReducer from "./pagesReducer";
import postReducer from "./postReducer";
const errorMessage = (state = null, action: AnyAction) => {
    const { error, type } = action;
    if (error && type === HANDLE_ERRORS) {
        return error;
    } else if (type !== HANDLE_ERRORS) {
        return null;
    }
    return state;
};
export default combineReducers({
  errorMessage,
  pages: pagesReducer,
  posts: postReducer,
});
