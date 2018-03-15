import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import components
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Wiz01 from './components/Wiz01/Wix01';

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/Wizard/1' component={Wiz01} />
        <Route path='/Dashboard/:id' component={Dashboard} />
    </Switch>
)