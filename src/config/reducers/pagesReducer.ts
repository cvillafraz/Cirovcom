import { AnyAction } from "redux";
import { GET_PAGES } from "../actions/types";
const initialState = {
    items: [],
};
export default function(state = initialState, action: AnyAction) {
    switch (action.type) {
        case GET_PAGES:
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
}
