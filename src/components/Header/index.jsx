import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {singInUser} from "../../actions";
import {compose} from "../../Utils";
import {connect} from "react-redux";
import {customMedia} from "../../styles/customMedia";
import media from 'styled-media-query';

const BannerWrap = styled.div`
  width: 100%;
  ${({theme}) => css`
    background: ${theme.colors.greenHeader};
   `}
`;

const Banner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  padding: 10px 40px;
  
  ${({theme}) => css`
    background: ${theme.colors.greenHeader};
   `}
  
  ${media.lessThan('medium')`
    padding: 10px;
    align-items: baseline;
  `}
`;

const Left = styled.div`
  display: flex;
  width: 60%;
  justify-content: flex-start;
  align-items: baseline;
`;

const Logo = styled(Link)`
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
  align-items: baseline;
`;

const Info = styled(Link)`
  text-decoration: none;
  color: white;
  cursor:pointer;
`;

const Header = ({productList, singInUser}) => {
    const {singIn} = productList;

    return (
        <BannerWrap>
            <Banner>
                {singIn ? (
                    <>
                        <Left>
                            <Logo to={'/main'}>Логотип</Logo>
                            <Info to={'/category'}>Продукция</Info>
                        </Left>
                        <Right>
                            <Info to={'/'} onClick={() => singInUser(false)}>Выйти из аккаунта</Info>
                        </Right>
                    </>
                ) : (
                    <>
                        <Left>
                            <Logo to={'/main'}>Логотип</Logo>
                        </Left>
                        <Right>
                            <Info to={'/register'}>Регистрация</Info>
                        </Right>
                    </>
                )
                }
            </Banner>
        </BannerWrap>
    )
}

const mapStateToProps = ({productList}) => {
    return {productList}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        singInUser: singInUser
    }, dispatch)
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps))(Header);