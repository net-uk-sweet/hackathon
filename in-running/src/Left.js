import React from 'react';

export default () => {
  return(
    <section style={{flex: 1, paddingRight: '40px'}}>

      <h1>3:15 Cheltenham <span>In-running</span></h1>
      <p>Going: good (soft in places) - Distance: 4m</p>

      <aside className='bets'>
        <ul>
          <li>Your Stake:</li>
          <li>£1</li>
          <li>£2</li>
          <li>£5</li>
          <li>£10</li>
          <li>Custom Stake</li>
          <li>All In</li>
        </ul>
      </aside>

      <aside className='selections'>


        <div className='selections-row'>


          <div className='selections__selection'>
            <div className='selections__selection-header'></div>
            <div className='selections__selection-body'></div>
            <div className='selections__selection-button'>
              <img alt="silk" src="https://images.timeform.com/silks/opt/00077033.png" />
              <button>Place Bet</button>
            </div>
          </div>

          <div className='selections__selection'>
            <div className='selections__selection-header'></div>
            <div className='selections__selection-body'></div>
            <div className='selections__selection-button'>
              <button>Place Bet</button>
            </div>
          </div>

        </div>



      </aside>

      <aside className='upcoming'></aside>

    </section>
  );
}
