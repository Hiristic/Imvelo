import React from 'react';
import Product from './views/Product/Product';
import Login from './views/Login/Login';
import NavBar from './Component/NavBar/NavBar';
import Home from './views/Home/Home';
import ForgotPassword from './views/ForgotPassword/ForgotPassword'

import { Route, Switch } from 'react-router-dom';

export const Routes = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Product" component={Product} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/ForgotPassword" component={ForgotPassword} />
            </Switch>
        </div>
    );
};