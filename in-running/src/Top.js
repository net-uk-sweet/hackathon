import React from 'react';
import broadcastChannel from './broadcastChannel';

import Form from './Form';
import FullScreenVideo from './FullScreenVideo';
import JockeyCamVideo from './JockeyCamVideo';

export default class Top extends React.Component {
    state = { screen: 0 };

    componentWillMount() {
      
      broadcastChannel.onmessage = ({ data }) => {
        console.log('onmessage', data);
        this.setState(data);
      }
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