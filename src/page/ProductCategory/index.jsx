import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

import Spinner from "../../components/Spiner";
import {compose} from "../../Utils";
import {withProductstoreService} from '../../components/Hoc'
import {fetchProduct, productclickItem} from "../../actions";
import Paginator from "./Paginator";

import {array, func} from "prop-types";

const ProductCategory = ({product, loading, fetchProduct, productIdClick}) =>{

    useEffect(() => {
        fetchProduct()
    }, [])

        return loading ? <Paginator todos={product} productIdClick={productIdClick}/> : <Spinner />
}

const mapStateToProps = ({productList: {product, loading}}) => {
    return {product, loading}
}

const mapDispatchToProps = (dispatch, {productstoreService}) => {
    return bindActionCreators({
        fetchProduct: fetchProduct(productstoreService),
        productIdClick: productclickItem,
        }, dispatch)
}

export default compose(
    withProductstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ProductCategory);

ProductCategory.propTypes = {
    product: array,
    fetchProduct: func,
    productIdClick: func,
}