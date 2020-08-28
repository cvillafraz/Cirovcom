import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_POSTS, HANDLE_ERRORS } from "./types";
export const fetchPosts = () => (dispatch: Dispatch): void => {
  axios
    .get("https://wordpress.cirov.com.ve//wp-json/wp/v2/posts")
    .then((res) => dispatch({ payload: res.data, type: FETCH_POSTS }))
    .catch((err) => dispatch({ type: HANDLE_ERRORS, error: err }));
};
