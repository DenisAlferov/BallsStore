
export enum ThemeModes {
   LIGHT = "light",
   DARK = "dark",
}

const palettes = {
   [ThemeModes.LIGHT]:{
      primary: {
         main: "white",
      },
      sub:{
         main: "#F4EEFD",
      },
      text: {
         main: "black",
      },
      btn: {
         main: "white",
      },
   },

   [ThemeModes.DARK]:{
      primary: {
         main: "#313037",
      },
      sub:{
         main: "#313037",
      },
      text: {
         main: "#A8A8A8;",
      },
      btn: {
         main: "#A8A8A8",
      },
   },
}


export const createCustomTheme = (mode: ThemeModes) => {
   return {
      palette: {
         mode: mode,
         ...palettes[mode]
      }
 };
};