import {shuffle} from 'lodash';

const selected = (state, productId) => {
    const {productList: {product, singIn}} = state;
    const items = product.find(item => item.id === productId);
    const random = shuffle(product.map(({id})=>id)).slice(0,3);
    const randomItem = product.filter(item => {
        return random.includes(item.id)
    });
    return {
        product,
        singIn,
        error: null,
        randomItem,
        productId: items
    }
}

const singItemUser = (state, user) => {
    const {productList: {product}} = state;
    console.log(user)
    return {
        product,
        error: null,
        singIn: user
    }
}

export const updateProductList = (state, action) => {
    if(state === undefined) {
        return {
            product: [],
            loading: false,
            error: null,
            productId: [],
            singIn: false

        }
    }

    switch(action.type){
        case 'FETCH_PRODUCT_REQUEST':
            return {
                product: [],
                loading: false,
                error: null,
                productId: [],
                singIn: false

            };

        case 'FETCH_PRODUCT_SUCCESS':
            return {
                product: action.payload,
                loading: true,
                error: null,
                productId: [],
                singIn: true
            };

        case 'PRODUCT_CLICK_ITEM':
            return selected(state, action.payload)

        case 'SING_IN_USER':
            return singItemUser(state, action.payload)

        case 'FETCH_PRODUCT_FAILURE':
            return {
                product: [],
                loading: false,
                error: action.payload,
                productId: [],
                singIn: false
            }


    }
}