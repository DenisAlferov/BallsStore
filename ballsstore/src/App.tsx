import React, { useState } from 'react';
import Layout from './client/components/Layout/Layout';
import { ThemeProvider } from 'styled-components';
import { ThemeModes, createCustomTheme } from './styles/theme';
import { Route, Routes } from 'react-router-dom';
import { userRoutes } from './client/userRoutes';
import MainPage from './pages/MainPage/MainPage';
import { useSelector } from 'react-redux';


export const ThemeContext = React.createContext(() => {})

function App() {
  const userTheme = useSelector(state => state.theme.themeMode)
  const currentTheme = createCustomTheme(userTheme);

const context = {
  user: String,
}
  return (
    
    <ThemeContext.Provider value={context}>
      <ThemeProvider theme={currentTheme}>
      <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<MainPage/>}/>
            {userRoutes.map(({path, id, Component, componentAdditionalProps}) => {
               return <Route key={id} path={path} element={<Component {...componentAdditionalProps}/>}/>
            })}
            </Route>
         </Routes>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
 