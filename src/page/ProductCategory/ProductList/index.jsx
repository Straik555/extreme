import React from 'react';
import {string, number} from "prop-types";

import {
    Banner,
    Image,
    Wrapper,
    Category,
    WrappTitle,
    Title,
    Price
} from './styled.jsx'

const ProductList = ({id, title, category, price, coverImage, productId}) => {

    return (
        <Banner to={`/category/details/${title}`} onClick={() => productId(id)}>
            <Image>
                <img src={coverImage}/>
            </Image>
            <Wrapper>
                <Category>{category}</Category>
                <WrappTitle>
                    <Title size={'24px'}>{title}</Title>
                    <Price>{price} грн</Price>
                </WrappTitle>
            </Wrapper>
        </Banner>
    )
}

export default ProductList;

ProductList.propTypes = {
    title: string.isRequired,
    category: string.isRequired,
    price: number.isRequired,
    coverImage: string.isRequired,
}
