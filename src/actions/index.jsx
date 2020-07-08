
const productLoaded = (newProduct) => {
    return {
        type: 'FETCH_PRODUCT_SUCCESS',
        payload: newProduct
    }
}

const productRequested = () => {
    return {
        type: 'FETCH_PRODUCT_REQUEST'
    }
}

const productError = (error) => {
    return {
        type: 'FETCH_PRODUCT_FAILURE',
        payload: (error)
    }
}

const fetchProduct = (productstoreService) => () => (dispatch) => {
    dispatch(productRequested());
    productstoreService.getProduct()
        .then(data => dispatch(productLoaded(data)))
        .catch(err => dispatch(productError(err)))
}

const productclickItem = (productId) => {
    return {
        type: 'PRODUCT_CLICK_ITEM',
        payload: productId
    }
}

const singInUser = (item) => {
    return {
        type: 'SING_IN_USER',
        payload: item
    }
}

export {
    fetchProduct,
    productclickItem,
    singInUser
}