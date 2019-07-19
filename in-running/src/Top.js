import React from 'react';
import broadcastChannel from './broadcastChannel';

import Form from './Form';

export default class Top extends React.Component {
    componentWillMount() {
      broadcastChannel.onmessage = ({ data }) => console.log({ 'fullScreen': data.fullScreen });
    }
  
    render() {
      return <Form />
    }
}