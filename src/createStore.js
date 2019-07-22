import { ceateStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { todoReducer } from "./reducers/Todo";

export default createStore = () => {
    const store = reduxCreateStore(
        combineReducers({
            todo: todoReducer,
        }),
        applyMiddleware(
            logger,
        )
    );

    return store;
}
