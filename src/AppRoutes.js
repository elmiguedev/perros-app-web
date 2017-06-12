import MainLayout from './pages/MainLayout';
import HomePage from './pages/HomePage';
import PerrosPage from './pages/PerrosPage';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import React, { Component } from 'react';

class AppRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
                <MainLayout>
                    <Switch>
                        <Route path='/perros' component={PerrosPage} />
                        <Route path='/' component={HomePage} />
                    </Switch>
                </MainLayout>
            </BrowserRouter>
        );
    }
}

export default AppRoutes;
