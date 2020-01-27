import React from 'react';
import Footer from '../components/Footer';
import Navbar from './Navigation';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Layout;
