import { ThemeModes } from "../../styles/theme";
import { actionTypes } from "../Actions/themeActions";


const defaultState = {
   themeMode: ThemeModes.LIGHT,
 
 }


export const themeReducer = (state = defaultState, action: { type: any; }) => {
   switch (action.type) {
     case actionTypes.TOGGLE_THEME:
       return {...state, themeMode: state.themeMode === ThemeModes.LIGHT ? ThemeModes.DARK : ThemeModes.LIGHT };
     default:
       return state;
   }
 }