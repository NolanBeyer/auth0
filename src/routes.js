import React from 'react'
import Profile from './components/Profile';
import { Switch, Route } from 'react-router-dom';

export default (
    <Switch>
        <Route exact path="/" component={Profile} />
    </Switch>
)