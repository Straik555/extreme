import React from "react";
import ProductList from "../ProductList";
import {array, func, object} from 'prop-types';
import styled, {css} from 'styled-components';

const Title = styled.h1`
  line-height: 150%;
  text-align: center;
  margin-top: 50px;
   
  ${({theme, size, color}) => css`
    color: ${color || theme.colors.titleDark};
    font-size: ${size};
  `}
`;

const BannerWrap = styled.div`
  display: flex;
  padding-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Similar = ({randomItem, productIdClick}) => {
    return (
        <>
            <Title size={'20px'} color={'#59abb4'}>Похожие товары</Title>
            <BannerWrap>
                {
                    randomItem.map((item) => {
                        return (
                            <ProductList
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                category={item.category}
                                price={item.price}
                                coverImage={item.coverImage}
                                productIdClick={productIdClick}
                            />
                        )
                    })
                }
            </BannerWrap>
        </>
    )
}

export default Similar;

Similar.propTypes = {
    randomItem: array,
    productId: object,
}