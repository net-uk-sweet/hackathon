import React from 'react';
import broadcastChannel from './broadcastChannel';

import Feed from './FEED';
import Left from './Left';

export default class Bottom extends React.Component {
    state = { screen: 0 };
  
    handleButtonClick = () => {
      const state = { screen: this.state.screen ? 0 : 1 };
      this.setState(state);
      broadcastChannel.postMessage(state);
    }
  
    render() {
      return (
        <main>
          <header></header>
          <section>
            <nav></nav>
            <div>
              <aside>
                <Left />
                <Feed />
              </aside>
            </div>
          </section>
          <button onClick={this.handleButtonClick}>Toggle full-screen</button>
        </main>
      )
    }
  }