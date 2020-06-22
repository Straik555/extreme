import React from "react";
import ProductList from "../ProductList";

import styled from 'styled-components';
import {Title} from "../ProductList/styled";

const Banner = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & h1{
    text-align: center;
  }
`;

const BannerWrap = styled.div`
  display: flex;
  padding-top: 20px;
`;

const Similar = ({randomItem}) => {
    console.log('random', randomItem)
    return (
        <Banner>
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
                            />
                        )
                    })
                }
            </BannerWrap>
        </Banner>
    )
}

export default Similar;