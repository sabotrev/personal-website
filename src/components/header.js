import React from 'react';
import styled from 'styled-components';
import { theme } from '../../config';

const StyledHeader = styled.header`
    background-color: ${theme.secondaryColor};
    height: 1rem;
`;

const Header = () => {
    return <StyledHeader />;
};
export default Header;
