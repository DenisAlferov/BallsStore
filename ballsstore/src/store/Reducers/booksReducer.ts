import { ThemeModes } from "../../styles/theme";
import { Book } from "../../types";
import { actionTypes } from "../Actions/themeActions";
import { baseActionTypeWithPayload } from "../Actions/types";

type defaultStateType = Record<"allBooks" | "favorite" | "inCard", Book[]>;


const defaultState: defaultStateType = {
   allBooks: [],
   favorite: [],
   inCard: [],
}


export const booksReducer = (state = defaultState, action: baseActionTypeWithPayload<actionTypes, Book | Book[] |string> ) => {
   switch (action.type) {
      case actionTypes.SET_BOOKS:
     
         if (Array.isArray(action.payload)) {
            return { ...state, allBooks: [...action.payload] as Book[] };
         }
            return state;
       
      case actionTypes.ADD_TO_FAVORITE:
      return {...state, favorite: state.favorite.map((book) =>
      book.isbn13 === action.payload 
         ? {...book, isFavourite: !book.isFavourite}
         : book,
      )};


      case actionTypes.ADD_TO_CARD:
      return {...state, inCard: [...state.inCard, action.payload] as Book[]  };
      default:
      return state;
   }
 }