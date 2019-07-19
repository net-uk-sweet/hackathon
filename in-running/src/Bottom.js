import React from 'react';
import broadcastChannel from './broadcastChannel';

import Feed from './FEED';
import Left from './Left';

export default class Bottom extends React.Component {
  state = { fullScreen: false };

  handleButtonClick = () => {
    const state = { screen: this.state.screen ? 0 : 1 };
    this.setState(state);
    broadcastChannel.postMessage(state);
  };

  render() {
    return (
      <main>
        <header />
        <section>
          <nav />
          <div>
            <aside>
              <Left />
            </aside>
          </div>
        </section>
        <button onClick={this.handleButtonClick}>Toggle full-screen</button>
      </main>
    );
  }
}
