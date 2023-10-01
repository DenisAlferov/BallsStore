import { Dispatch } from "redux";
import { ResponseTypes } from "../client/components/BookItem/BookItem";
import { booksAction } from "./Actions/booksActions";

export const getBooks = async (): Promise<ResponseTypes> => {
   return await (await fetch('https://api.itbook.store/1.0/new')).json();
};
 export const getBooksAsync = () => {
      return (dispatch: Dispatch) => {
      getBooks().then((results) => dispatch(booksAction.setBooks(results.books)))} 
}  