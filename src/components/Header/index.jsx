import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Banner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  padding: 10px 40px;
`;

const Left = styled.div`
  display: flex;
  width: 60%;
  justify-content: flex-start;
   align-items: baseline;
`;

const Logo = styled.h1`
   margin-right: 30px;
   font-size: 25px;
   font-weight: bold;
   color: white;
   text-decoration: none;
`;

const Right = styled.div`
  display: flex;
  width: 40%;
  justify-content: flex-end;
  align-items: center;
`;

const Info = styled(Link)`
  text-decoration: none;
  color: white;
  cursor:pointer;
`;

const Header = () => {
    return (
        <Banner>
            <Left>
                <Logo>Логотип</Logo>
                <Info to={'/category'}>Продукция</Info>
            </Left>
            <Right>
                <Info to={'/'}>Выйти из аккаунта</Info>
            </Right>
        </Banner>
    )
}

export default Header;