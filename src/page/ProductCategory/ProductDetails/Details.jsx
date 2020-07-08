import React from "react";
import styled, {css} from 'styled-components';
import {string, shape, number} from "prop-types";
import {customMedia} from "../../../styles/customMedia";
import media from "styled-media-query";
import {Category, Price, Title} from '../ProductList/styled'

const Wrapper = styled.div`
  padding: 0 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Banner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
    
  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;

const LeftBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 500px;
  border-radius: 5px;
  
  ${({theme}) => css`
    border: 1px solid ${theme.colors.lightSilver};
  `} 
  ${media.lessThan('medium')`
    width: 90%;
    margin: 0 5%;
  `}

`;

const RightBanner = styled.div`
  width: 50%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  ${media.lessThan('medium')`
    width: 85%;
    padding: 30px;
  `}
`;

const Image = styled.img`
  width: 500px;
    
    ${customMedia.lessThan('lessBig')`
        width: 390px;
    `}
    ${media.lessThan('medium')`
        width: 300px;
    `}
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
                    <Image src={coverImage} />
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

Details.propTypes = {
    productId: shape({
        coverImage: string,
        quantity: number,
        title: string,
        price: number,
        id: number,
        details: string,
        category: string
    })
}