import React from "react";
import {connect} from 'react-redux';

import Details from "./Details";
import Similar from './Similar';
import {compose} from "../../../Utils";
import {withProductstoreService} from '../../../components/Hoc'

const ProductDetails = ({product, productId, randomItem}) => {
    return (
        <>
            <Details productId={productId} />
            <Similar randomItem={randomItem} />
        </>
    )
}

const mapDispatchToProps = () => {
    return {}
}

const mapStateToProps = ({productList: {product, productId, randomItem}}) => {
    return {product, productId, randomItem}
}

export default compose(
    withProductstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ProductDetails);