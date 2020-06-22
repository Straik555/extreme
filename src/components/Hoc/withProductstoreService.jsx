import React from 'react';
import { ProductstoreServiceConsumer } from '../ProductServiceContext';

const withProductstoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <ProductstoreServiceConsumer>
                {
                    (productstoreService) => {
                        return (<Wrapped {...props}
                                         productstoreService={productstoreService}/>);
                    }
                }
            </ProductstoreServiceConsumer>
        );
    }
};

export default withProductstoreService;