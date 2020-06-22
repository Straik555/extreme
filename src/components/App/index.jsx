import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import styled, {css} from "styled-components";

import ProductCategory from '../../page/ProductCategory';
import ProductDetails from '../../page/ProductCategory/ProductDetails'
import Header from "../Header";
import Entrance from '../../page/Entrance';

const Banner = styled.div`
  width: 100%;
  ${({theme}) => css`
    background: ${theme.colors.greenHeader};
  `}
`;

const BannerWrapp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  margin: 0 auto;
  
  ${({theme}) => css`
    background: ${theme.colors.light};
  `}
`;

const App = () => {
    return (
        <Router>
            <Banner>
                <Header />
                <BannerWrapp>
                    <Switch>
                        <Route exact path="/" render={() => (<Redirect to="/main"/>)}/>
                        <Route path='/main' exact component={Entrance} />
                        <Route path='/category' exact component={ProductCategory} />
                        <Route path='/category/details/'  component={ProductDetails} />
                    </Switch>
                </BannerWrapp>
            </Banner>
        </Router>
    )
}

export default App;