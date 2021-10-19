import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Dashboard}/>
        <Route path='/home' component={Home}/>
    </Switch>
);

export default Routes;