import { applyMiddleware, createStore, Middleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
const middleware: Middleware[] = [thunk];
const store: Store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware),
    ),
);

export default store;
