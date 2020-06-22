import React from "react";
import styled, {css} from 'styled-components';

import {Category, Price, Title} from '../ProductList/styled'

const Banner = styled.div`
  width: 100%;
  display: flex;
`;

const LeftBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 50%;
  height: 500px;
  border-radius: 5px;
  
  ${({theme}) => css`
    border: 1px solid ${theme.colors.lightSilver};
  `} 
  & img{
    width: 500px;
  }
`;

const RightBanner = styled.div`
  width: 50%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const HeaderBanner = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 45px;
  line-height: 100%;
  margin-bottom: 40px;
  ${({theme}) => css`
    color: ${theme.colors.greenHeader}
  `}
`;

const Details = ({productId: {coverImage, quantity, title, price, id, details, category}}) => {
    return (
        <>
            <HeaderBanner>Товар</HeaderBanner>
            <Banner>
                <LeftBanner>
                    <img src={coverImage} />
                </LeftBanner>
                <RightBanner>
                    <Category>{category}</Category>
                    <Title size={40} color={'black'}>{title}</Title>
                    <Category color={'black'}>Количество товара: {quantity}</Category>
                    <Price>{price} грн</Price>
                    <Category color={'black'} size={'20px'}>{details}</Category>
                </RightBanner>
            </Banner>
        </>
    )
}

export default Details;