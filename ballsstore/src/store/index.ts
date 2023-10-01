import {applyMiddleware, combineReducers, createStore} from "redux";
import { themeReducer } from "./Reducers/themeReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { booksReducer } from "./Reducers/booksReducer";
import thunk from "redux-thunk";



const rootReducer = combineReducers({
   theme: themeReducer,
   books: booksReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export type RootState = ReturnType<typeof rootReducer>;