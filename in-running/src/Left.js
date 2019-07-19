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
              <img src="00000071.png" />
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
              <img src="00077033.png" />
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

        <div className="selections-row">
          <div className="selections__selection">
            <div className="selections__selection-header">
              <span>7</span>MASTER OF REALITY
            </div>
            <div className="selections__selection-body">
              <img src="00000071.png" />
              <div style={{ flex: 1 }}>
                <p>j: W. M. Lordan</p>
                <p>t: Joseph O'Brien</p>
              </div>
              <div>7/6</div>
            </div>
            <div className="selections__selection-button">
              <button>Bet For</button>
              <button>Bet Against</button>
            </div>
          </div>

          <div className="selections__selection">
            <div className="selections__selection-header">
              <span>9</span>CROSS COUNTER
            </div>
            <div className="selections__selection-body">
              <img src="00012133.png" />
              <div style={{ flex: 1 }}>
                <p>j: James Doyle</p>
                <p>t: Charlie Appleby</p>
              </div>
              <div>89/7</div>
            </div>
            <div className="selections__selection-button">
              <button style={{ marginLeft: 0 }}>Place Bet</button>
            </div>
          </div>
        </div>

        <div className="selections-row">
          <div className="selections__selection">
            <div className="selections__selection-header">
              <span>41</span>FLAG OF HONOUR
            </div>
            <div className="selections__selection-body">
              <img src="00049444.png" />
              <div style={{ flex: 1 }}>
                <p>j: Ryan Moore</p>
                <p>t: Aidan O'Brien</p>
              </div>
              <div>10/4</div>
            </div>
            <div className="selections__selection-button">
              <button>Bet For</button>
              <button>Bet Against</button>
            </div>
          </div>

          <div className="selections__selection">
            <div className="selections__selection-header">
              <span>11</span>CAPRI
            </div>
            <div className="selections__selection-body">
              <img src="00050484.png" />
              <div style={{ flex: 1 }}>
                <p>j: Donnacha O'Brien</p>
                <p>t: Aidan O'Brien</p>
              </div>
              <div>95/7</div>
            </div>
            <div className="selections__selection-button">
              <button>Bet For</button>
              <button>Bet Against</button>
            </div>
          </div>
        </div>

        <div className="selections-row">
          <div className="selections__selection">
            <div className="selections__selection-header">
              <span>17</span>RAYMOND TUSK
            </div>
            <div className="selections__selection-body">
              <img src="00851719.png" />
              <div style={{ flex: 1 }}>
                <p>j: Jamie Spencer</p>
                <p>t: Richard Hannon</p>
              </div>
              <div>10/4</div>
            </div>
            <div className="selections__selection-button">
              <button>Bet For</button>
              <button>Bet Against</button>
            </div>
          </div>

          <div className="selections__selection">
            <div className="selections__selection-header">
              <span>2</span>CALLED TO THE BAR
            </div>
            <div className="selections__selection-body">
              <img src="00857553.png" />
              <div style={{ flex: 1 }}>
                <p>j: Oisin Murphy</p>
                <p>t: Mme Pia Brandt</p>
              </div>
              <div>32/9</div>
            </div>
            <div className="selections__selection-button">
              <button>Bet For</button>
              <button>Bet Against</button>
            </div>
          </div>
        </div>
      </aside>

      <aside className="upcoming">
        <div className="upcoming__item">
          <span>next off</span>
          <h2>4:00 Newbury</h2>
          <p>5m going to really good and hard</p>
          <p>8 runners</p>
        </div>
      </aside>
    </section>
  );
};
