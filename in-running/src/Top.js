import React from 'react';
import brokerChannel from './brokerChannel';

import Form from './Form';
import FullScreenVideo from './FullScreenVideo';
import JockeyCamVideo from './JockeyCamVideo';

export default class Top extends React.Component {
    state = { screen: 0 };

    componentWillMount() {
      brokerChannel.onmessage = (msg) => {
        console.log('test', msg)
        this.setState(JSON.parse(msg));
      }
      console.log('Top screen', brokerChannel);
      brokerChannel.onopen = function() {
        console.log('channel open');
      };
    }
  
    render() {
      const { screen } = this.state;

      if (screen === 0) {
        return <Form />
      }

      if (screen === 1) {
        return <FullScreenVideo />
      }

      return <JockeyCamVideo />

    }
}