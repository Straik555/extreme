import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {array, func} from 'prop-types';
import styled, {css} from 'styled-components';
import media from 'styled-media-query';

import {compose} from "../../Utils";
import {withProductstoreService} from '../../components/Hoc'
import {fetchProduct, productclickItem} from "../../actions";

import ProductList from "./ProductList";

const Banner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 45px;
  line-height: 100%;
  margin-bottom: 40px;
  ${({theme}) => css`
    color: ${theme.colors.greenHeader}
  `}
`;

const Wrapper = styled.div`

  display: flex;
  flex-wrap: wrap;
`;

const ProductCategory = ({product, fetchProduct, productId}) =>{
    useEffect(() => {
        fetchProduct()
    }, [])

        return (
            <Banner>
                <Title>Наша продукция</Title>
                <Wrapper>
                    {
                        product.map((item) => {
                            return (
                                <ProductList
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    category={item.category}
                                    price={item.price}
                                    coverImage={item.coverImage}
                                    productId={productId}
                                />
                            )
                        })
                    }
                </Wrapper>
            </Banner>
        )

}

const mapStateToProps = ({productList: {product}}) => {
    return {product}
}

const mapDispatchToProps = (dispatch, {productstoreService}) => {
    return bindActionCreators({
        fetchProduct: fetchProduct(productstoreService),
        productId: productclickItem,
        }, dispatch)
}

export default compose(
    withProductstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ProductCategory);

ProductList.propTypes = {
    product: array,
    fetchProduct: func,
    productId: func,
}