import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { toggleThemeAction } from "../Actions/themeActions";
import { booksAction } from "../Actions/booksActions";

export const useActions = () => {
   const dispatch = useDispatch();
return bindActionCreators({...toggleThemeAction, ...booksAction}, dispatch);
}