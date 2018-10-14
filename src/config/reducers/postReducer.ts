import { AnyAction } from "redux";
import { FETCH_POSTS } from "../actions/types";

const initialState = {
    items: [],
};

export default function(state = initialState, action: AnyAction) {
    switch (action.type) {
        case FETCH_POSTS:
        return {
                ...state,
                items: action.payload,
        };
        default:
            return state;
    }
}
