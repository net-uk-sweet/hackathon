import React from 'react';

export default () => {
  return (
    <section style={{ flex: 1, paddingRight: '40px' }}>
      <h1>
        3:15 Cheltenham <span>In-running</span>
      </h1>
      <p>Going: good (soft in places) - Distance: 4m</p>

      <aside className="bets">
        <ul>
          <li>Stake:</li>
          <li>£1</li>
          <li>£2</li>
          <li>£5</li>
          <li>£10</li>
          <li>Custom</li>
          <li>All In</li>
        </ul>
      </aside>

      <div className="progress">
        <div class="bar" />
      </div>

      <aside className="selections">
        <div className="selections-row">
          <div className="selections__selection">
            <div className="selections__selection-header">
              <span>4</span>STRADIVARIUS
            </div>
            <div className="selections__selection-body">
              <img src="https://images.timeform.com/silks/opt/00000071.png" />
              <div style={{ flex: 1 }}>
                <p>j: Frankie Dettori</p>
                <p>t: John Gosden</p>
              </div>
              <div>9/4</div>
            </div>
            <div className="selections__selection-button">
              <button>Bet For</button>
              <button>Bet Against</button>
            </div>
          </div>

          <div className="selections__selection">
            <div className="selections__selection-header">
              <span>8</span>DEE EX BEE
            </div>
            <div className="selections__selection-body">
              <img src="https://images.timeform.com/silks/opt/00077033.png" />
              <div style={{ flex: 1 }}>
                <p>j: Silvestre De Sousa</p>
                <p>t: Mark Johnston</p>
              </div>
              <div>9/4</div>
            </div>
            <div className="selections__selection-button">
              <button>Bet For</button>
              <button>Bet Against</button>
            </div>
          </div>
        </div>
      </aside>

      <aside className="upcoming" />
    </section>
  );
};
