import { AnyAction, combineReducers } from "redux";
import { HANDLE_ERRORS } from "../actions/types";
import pagesReducer from "./pagesReducer";
import postReducer from "./postReducer";
const errorMessage = (state = null, action: AnyAction) => {
    const { error } = action;
    if (error) {
        return error;
    }
    return state;
};
export default combineReducers({
  errorMessage,
  pages: pagesReducer,
  posts: postReducer,
});
