import {shuffle} from 'lodash';


const selected = (state, productId) => {
    const {productList: {product}} = state;
    const items = product.find(item => item.id === productId);
    const random = shuffle(product.map(({id})=>id)).slice(0,3);
    const randomItem = product.filter(item => {
        return random.includes(item.id)
    });

    return {
        product,
        error: null,
        randomItem,
        productId: items
    }
}


export const updateProductList = (state, action) => {
    if(state === undefined) {
        return {
            product: [],
            error: null,
            productId: [],
        }
    }

    switch(action.type){
        case 'FETCH_PRODUCT_REQUEST':
            return {
                product: [],
                error: null,
                productId: [],
            };

        case 'FETCH_PRODUCT_SUCCESS':
            return {
                product: action.payload,
                error: null,
                productId: [],
            };

        case 'PRODUCT_CLICK_ITEM':
            return selected(state, action.payload)


        case 'FETCH_PRODUCT_FAILURE':
            return {
                product: [],
                error: action.payload,
                productId: [],
            }


    }
}