import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import components
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Wiz01 from './components/Wiz01/Wiz01';
import Wiz02 from './components/Wiz02/Wiz02';
import Wiz03 from './components/Wiz03/Wiz03';
import Wiz04 from './components/Wiz04/Wiz04';
import Wiz05 from './components/Wiz05/Wiz05';

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/Wizard/1' component={Wiz01} />
        <Route path='/Wizard/2' component={Wiz02} />
        <Route path='/Wizard/3' component={Wiz03} />
        <Route path='/Wizard/4' component={Wiz04} />
        <Route path='/Wizard/5' component={Wiz05} />
        <Route path='/Dashboard/:id' component={Dashboard} />
    </Switch>
)