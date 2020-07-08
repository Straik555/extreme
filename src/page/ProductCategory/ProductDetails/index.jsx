import React from "react";
import {connect} from 'react-redux';
import {array, func, object} from "prop-types";
import styled, {css} from 'styled-components';
import media from 'styled-media-query';

import {productclickItem} from '../../../actions';
import Details from "./Details";
import Similar from './Similar';
import {compose} from "../../../Utils";
import {withProductstoreService} from '../../../components/Hoc'
import {bindActionCreators} from "redux";

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  width: 1400px;
  justify-content: center;
  margin: 0 auto;

`;
//
const ProductDetails = ({productId, randomItem, productIdClick}) => {

    return (
        <Banner>
            <Details productId={productId} />
            <Similar
                randomItem={randomItem}
                productIdClick={productIdClick}
            />
        </Banner>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        productIdClick: productclickItem
    }, dispatch)
}

const mapStateToProps = ({productList: {product, productId, randomItem}}) => {
    return {product, productId, randomItem}
}

export default compose(
    withProductstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ProductDetails);

ProductDetails.propTypes = {
    productId: object,
    randomItem: array
}