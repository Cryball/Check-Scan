import { combineReducers, createStore } from "redux";
import { currencyReducer } from "./currencyReducer";

const rootReducer = combineReducers({
    currency: currencyReducer
})

export const store = createStore(rootReducer)