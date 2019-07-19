import React from 'react';
import broadcastChannel from './broadcastChannel';

import Feed from './FEED';
import Left from './Left';

export default class Bottom extends React.Component {
  state = { screen: 0 };

  componentWillMount() {
    console.log('Bottom screen');
  }

  handleButtonClick = () => {
    const state = { screen: this.state.screen ? 0 : 1 };

    this.setState(state);
    broadcastChannel.postMessage(state);
  }

  render() {
    const { screen } = this.state;
    return (
      <main>
        <header></header>
        <section>
          <nav></nav>
          <div>
            <aside>
              <Left />
              {screen === 0 && (<Feed onToggleClick={this.handleButtonClick} />)}
            </aside>
          </div>
        </section>
      </main>
    )
  }
}
