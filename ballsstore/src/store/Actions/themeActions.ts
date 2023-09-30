export enum actionTypes {
   TOGGLE_THEME = "TOGGLE_THEME",
   SET_BOOKS = "SET_BOOKS",
   ADD_TO_FAVORITE = "ADD_TO_FAVORITE",
   ADD_TO_CARD = "ADD_TO_CARD"
}

interface IToggleThemeAction {
   type:  typeof actionTypes,
   payload: any,
}

export const toggleThemeAction = (payload: any) => {
   return {
      type: actionTypes.TOGGLE_THEME,
      payload,
   }
}