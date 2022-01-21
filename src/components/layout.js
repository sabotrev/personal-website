import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import styled, { createGlobalStyle } from 'styled-components';

const StyledLayoutWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
`;

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    html {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    html {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 769px) {
    html {
      font-size: 24px;
    }
  }
`;

const Layout = ({ children }) => {
    return (
        <StyledLayoutWrapper>
            <GlobalStyle />
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
        </StyledLayoutWrapper>
    );
};

Layout.propTypes = {
    children: PropTypes.any,
};

export default Layout;
