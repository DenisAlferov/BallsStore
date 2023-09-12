
export enum ThemeModes {
   LIGHT = "light",
   DARK = "dark",
}

const palettes = {
   [ThemeModes.LIGHT]:{
      primary: {
         main: "none",

      }
   },
   [ThemeModes.DARK]:{primary: {
         main: "#313037",
         
      }},
}


export const createCustomTheme = (mode: ThemeModes) => {
   return {
      palette: {
         mode: mode,
         ...palettes[mode]
      }
 };
};