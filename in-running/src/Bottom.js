import React from 'react';
import brokerChannel from './brokerChannel';

import Feed from './FEED';
import Left from './Left';

export default class Bottom extends React.Component {
  state = { screen: 0 };

  componentWillMount() {
    console.log('Bottom screen');
  }

  handleLeftClick = () => {
    console.log('left click');
    brokerChannel.send(JSON.stringify({ screen: 3 }));
  }

  handleButtonClick = () => {
    const state = { screen: this.state.screen ? 0 : 1 };

    this.setState(state);
    brokerChannel.send(JSON.stringify(state));
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
              <Left onBetClick={this.handleLeftClick} />
              {screen === 0 && (<Feed onToggleClick={this.handleButtonClick} />)}
            </aside>
          </div>
        </section>
      </main>
    )
  }
}
