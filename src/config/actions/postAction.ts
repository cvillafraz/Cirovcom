import { Dispatch } from "redux";
import { FETCH_POSTS, HANDLE_ERRORS } from "./types";
export const fetchPosts = () => (dispatch: Dispatch) => {
    fetch("https://www.cirovillafraz.dev.cc/wp-json/wp/v2/posts")
      .then((res) => res.status === 200 ? res.json() : Promise.reject(res))
      .then((posts) =>
        dispatch({
          type: FETCH_POSTS,
          // tslint:disable-next-line:object-literal-sort-keys
          payload: posts,
        }),
    ).catch((err) => dispatch({ type: HANDLE_ERRORS, error: err }));
};
