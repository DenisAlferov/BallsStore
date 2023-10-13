export enum ThemeModes {
	LIGHT = 'light',
	DARK = 'dark'
}
const palette = {
   [ThemeModes.LIGHT]:{
      primary: {
      	main: '#FFFFFF',

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
			main: '#313037',

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



export const CreateTheme = (mode: ThemeModes) => {
	return {
		themeMode: mode,
		palette: {
			mode: mode,
			...palette[mode]
		}
	};
};

