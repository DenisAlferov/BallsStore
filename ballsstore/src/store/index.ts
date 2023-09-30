import {combineReducers, createStore} from "redux";
import { themeReducer } from "./Reducers/themeReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { booksReducer } from "./Reducers/booksReducer";

const rootReducer = combineReducers({
   theme: themeReducer,
   books: booksReducer
})

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;