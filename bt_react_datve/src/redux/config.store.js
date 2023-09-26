import { combineReducers, createStore } from "redux";
import { DatVeReducer } from "./Datve/reducer";

const rootReducer = combineReducers({
    DatVeReducer
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())