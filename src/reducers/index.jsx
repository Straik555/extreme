import {updateProductList} from './updateProductList'

const reducer = (state, action) => {
    return {
        productList: updateProductList(state, action)
    }
};

export default reducer;