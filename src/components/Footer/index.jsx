import React from 'react';
import styled, {css} from 'styled-components';

const Banner = styled.div`
   width: 100%;
   height: 40px;
   
   ${({theme}) => css`
    background: ${theme.colors.greenHeader};
   `}
`;

const Footer = () => {
    return (
        <Banner>

        </Banner>
    )
}

export default Footer;