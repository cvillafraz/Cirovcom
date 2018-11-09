import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_POSTS, HANDLE_ERRORS } from "./types";
export const fetchPosts = () => (dispatch: Dispatch): void => {
  axios
    .get("https://www.wordpress.cirov.com.ve/wp/wp-json/wp/v2/posts", {
      headers: {
        Host: "www.wordpress.cirov.com.ve",
        Origin: "http://cirov.com.ve",
        Referer: "http://cirov.com.ve",
      },
    })
    .then((res) => dispatch({ payload: res.data, type: FETCH_POSTS }))
    .catch((err) => dispatch({ type: HANDLE_ERRORS, error: err }));
};
