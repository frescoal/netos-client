import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Views/Home';
import Accounts from '../Views/Accounts/Collection';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/accounts" component={Accounts} />
    </Switch>
  );
}
