import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import styled, {css} from "styled-components";

import ProductCategory from '../../page/ProductCategory';
import ProductDetails from '../../page/ProductCategory/ProductDetails'
import Header from "../Header";
import Entrance from '../../page/Entrance';
import CheckIn from "../../page/Entrance/checkIn";
import Footer from "../Footer";

const Banner = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const BannerWrap = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  min-height: 0;
  padding: 40px 0;
  margin: 0 auto;
`;

const App = () => {
    return (
        <Router>
            <Banner>
                <Header />
                <BannerWrap>
                    <Switch>
                        <Route exact path="/" render={() => (<Redirect to="/main"/>)}/>
                        <Route path='/main' exact component={Entrance} />
                        <Route path='/register' exact component={CheckIn} />
                        <Route path='/category' exact component={ProductCategory} />
                        <Route path='/category/details/'  component={ProductDetails} />
                    </Switch>
                </BannerWrap>
                <Footer />
            </Banner>
        </Router>
    )
}

export default App;