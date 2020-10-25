import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import FormPage from './pages/FormPage';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/data" exact component={FormPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;