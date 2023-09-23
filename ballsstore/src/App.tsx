import React, { useState } from 'react';
import Layout from './client/components/Layout/Layout';
import { ThemeProvider } from 'styled-components';
import { ThemeModes, createCustomTheme } from './styles/theme';


export const ThemeContext = React.createContext(() => {})

function App() {
  const [userTheme, setUserTheme] = useState(ThemeModes.LIGHT)
  const currentTheme = createCustomTheme(userTheme);

  const handleChangeTheme = () => {
    setUserTheme((prevTheme) => {
        return prevTheme === ThemeModes.DARK ? ThemeModes.LIGHT : ThemeModes.DARK;
    })
  }
  return (
    
    <ThemeContext.Provider value={handleChangeTheme}>
      <ThemeProvider theme={currentTheme}>
        <Layout>
          
 
        </Layout>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
 