import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Top from './Top';
import Bottom from './Bottom';

import './Timeform.css';
import './App.css';

export default class App extends React.Component {

  // componentWillMount() {
  //   const url = 'ws://localhost:1337'
  //   const connection = new WebSocket(url);

  //   connection.onopen = (msg) => {
  //     console.log('hello');
  //   }
  // }

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Bottom} />
            <Route path="/top" exact={true} component={Top} />
          </Switch>
        </BrowserRouter>
    );
  }
}
