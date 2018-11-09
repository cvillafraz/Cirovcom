import axios from "axios";
import { Dispatch } from "redux";
import { GET_PAGES, HANDLE_ERRORS } from "./types";
export const getPages = () =>  (dispatch: Dispatch): void => {
  axios
    .get("https://www.wordpress.cirov.com.ve/wp/wp-json/wp/v2/pages", {
      headers: {
        Host: "www.wordpress.cirov.com.ve",
        Origin: "http://cirov.com.ve",
        Referer: "http://cirov.com.ve",
      },
    })
    .then((res) => dispatch({ error: "", payload: res.data, type: GET_PAGES }))
    .catch((err) => dispatch({ type: HANDLE_ERRORS, error: err }));
};
