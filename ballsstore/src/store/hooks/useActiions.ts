import { useDispatch } from "react-redux"
import { Dispatch, bindActionCreators } from "redux";
import { toggleThemeAction } from "../Actions/themeActions";
import { booksAction } from "../Actions/booksActions";
import { ResponseTypes } from "../../client/components/BookItem/BookItem";
import {getBooksAsync} from "../fetch"



export const useActions = () => {
   const dispatch = useDispatch();
   return bindActionCreators({ ...toggleThemeAction, ...booksAction, getBooksAsync }, dispatch);
  };