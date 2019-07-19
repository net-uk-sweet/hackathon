import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Top from './Top';
import Bottom from './Bottom';

import './Timeform.css';
import './App.css';

export default function() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Bottom} />
        <Route path="/top" exact={true} component={Top} />
      </Switch>
    </BrowserRouter>
  );
}
