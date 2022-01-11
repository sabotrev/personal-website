import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

const wrapperStyles = {
    width: '100%',
    minHeight: '100vh',
    margin: '0 auto',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateColumns: '100%',
};

const Layout = ({ children }) => {
    return (
        <div style={wrapperStyles}>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.any,
};

export default Layout;
