import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navigation/index';
import { ThemeProvider } from 'styled-components';
import theme from '../../utils/theme';
import GlobalStyles from './GlobalStyles';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar />
        <div>{children}</div>
        <Footer />
        <GlobalStyles />

      </>
    </ThemeProvider>
  );
};

export default Layout;
