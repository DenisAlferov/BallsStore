import React from 'react';
import Layout from './client/components/Layout/Layout';
import { ThemeProvider } from 'styled-components';
import { ThemeModes, createCustomTheme } from './styles/theme';

const userTheme = createCustomTheme(ThemeModes.LIGHT);

function App() {

  return (
    <ThemeProvider theme={userTheme}>
      <Layout>
      



      </Layout>
    </ThemeProvider>
    
  );
}

export default App;
 