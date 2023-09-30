import { baseActionTypeWithPayload } from "./types";


export enum actionTypes {
   SET_BOOKS = "SET_BOOKS",
   ADD_TO_FAVORITE = "ADD_TO_FAVORITE",
   ADD_TO_CARD = "ADD_TO_CARD",
}

interface IBooksAction {
   setBooks:  (books: any[]) => baseActionTypeWithPayload<actionTypes, any[]>,
   addToFavorite:  (book: any) => baseActionTypeWithPayload<actionTypes, any>,
   addToCard:  (book: any) => baseActionTypeWithPayload<actionTypes, any>,
}

export const booksAction: IBooksAction =  {
   setBooks: (books) => ({ type: actionTypes.SET_BOOKS, payload: books }),
   addToFavorite: (book) => ({ type: actionTypes.ADD_TO_FAVORITE, payload: book }),
   addToCard: (book) => ({ type: actionTypes.ADD_TO_CARD, payload: book }),
}