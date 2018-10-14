import { Dispatch } from "redux";
import { GET_PAGES, HANDLE_ERRORS } from "./types";
export const getPages = () =>  (dispatch: Dispatch) => {

  fetch("https://www.cirovillafraz.dev.cc/wp-json/wp/v2/pages")
  .then((res) => res.status === 200 ? res.json() : Promise.reject(res),
  )
  .then((posts: any[]) =>
      dispatch({
        error: "",
        type: GET_PAGES,
        // tslint:disable-next-line:object-literal-sort-keys
        payload: posts,
      }),
    // tslint:disable-next-line:no-console
    ).catch((err) => dispatch({type: HANDLE_ERRORS, error: err}));
};
