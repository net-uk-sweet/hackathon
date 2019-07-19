import React, { Component } from 'react';
import jockies from './Jockeys';

export default class Left extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: false,
      runners: initialData
    };
  }

  componentDidMount() {
    const ws = new WebSocket('ws://10.1.58.165:48009');

    ws.addEventListener('message', ({ data }) => {
      console.log(data, JSON.parse(data));
      this.setState({ runners: JSON.parse(data), start: true });
    });
  }

  renderRunner = (data, index) => {
    const jocky = jockies.filter(j => j.id == data.selection_id)[0];

    return (
      <div className="selections__selection" key={data.selection_id}>
        <div className="selections__selection-header">
          <span>{data.selection_name.replace(/[a-z ]/gim, '')}</span>
          {data.selection_name.replace(/[0-9]/gim, '')}
        </div>
        <div className="selections__selection-body">
          <img src={jocky.silks} />
          <div style={{ flex: 1 }}>
            <p>j: {jocky.jockey}</p>
            <p>t: {jocky.trainer}</p>
          </div>
          <div>{data.for_side_price_1}</div>
        </div>
        <div className="selections__selection-button">
          <button onClick={this.props.onBetClick}>Bet For</button>
          <button>Bet Against</button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <section style={{ flex: 1, paddingRight: '20px' }}>
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
          <div className={`bar ${this.state.start ? 'active' : ''}`} />
        </div>

        <aside className="selections">
          <div className="selections-row">
            {this.state.runners && this.state.runners.length && this.state.runners.slice(0, 2).map(this.renderRunner)}
          </div>

          <div className="selections-row">
            {this.state.runners && this.state.runners.length && this.state.runners.slice(2, 4).map(this.renderRunner)}
          </div>

          <div className="selections-row">
            {this.state.runners && this.state.runners.length && this.state.runners.slice(6, 8).map(this.renderRunner)}
          </div>

          <div className="selections-row">
            {this.state.runners && this.state.runners.length && this.state.runners.slice(10, 11).map(this.renderRunner)}
          </div>

          {!this.state.start && (
            <h1 style={{ width: '100%', textAlign: 'center' }}>
              Starting soon
            </h1>
          )}
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
  }
}

const initialData = [
  {
    request_id: 858844,
    currently_in_running: 1,
    event_name: '16:20 Royal Ascot',
    in_play: 0,
    in_running_allowed: 1,
    managed_when_in_running: 1,
    market_id: 15838206,
    market_status: 'ACTIVE',
    matched_market_against_stake: '2413179.04',
    matched_market_for_stake: '421546.90',
    race_grade: '2m 3f 210y~Gold Cup (Group 1) 500000 GBP Added, 2m 3f 210y',
    request_time: '2019-07-18 19:26:54.510594',
    running_delay_seconds: 1,
    start_time: '2019-07-18 19:25:00.114670',
    total_matched_amount: '2834725.00',
    betdaq_timestamp: null,
    market_update_request_id: 858844,
    against_side_price_1: '2.30',
    against_side_price_2: '2.32',
    against_side_price_3: '2.34',
    against_side_stake_1: '544.60',
    against_side_stake_2: '102.00',
    against_side_stake_3: '27.73',
    deduction_factor: '37.71',
    first_match_at_same_price_occurred_at: '2019-06-20 15:22:18',
    for_side_price_1: '2.22',
    for_side_price_2: '2.20',
    for_side_price_3: '2.18',
    for_side_stake_1: '55.71',
    for_side_stake_2: '1069.87',
    for_side_stake_3: '50.86',
    last_matched_against_side_amount: '8.66',
    last_matched_for_side_amount: '6.87',
    last_matched_occurred_at: '2019-06-20 15:22:18',
    last_matched_price: '2.26',
    market_positive_winnings: '207377.12',
    market_winnings: '414720.07',
    matched_against_side_amount_at_same_price: '8.66',
    matched_for_side_amount_at_same_price: '6.87',
    matched_selection_against_stake: '340449.88',
    matched_selection_for_stake: '287875.85',
    number_orders: 3781,
    number_punters: 641,
    selection_id: 100822775,
    selection_name: ' 4 Stradivarius',
    selection_open_interest: '671482.63',
    selection_status: 'ACTIVE'
  },
  {
    request_id: 858844,
    currently_in_running: 1,
    event_name: '16:20 Royal Ascot',
    in_play: 0,
    in_running_allowed: 1,
    managed_when_in_running: 1,
    market_id: 15838206,
    market_status: 'ACTIVE',
    matched_market_against_stake: '2413179.04',
    matched_market_for_stake: '421546.90',
    race_grade: '2m 3f 210y~Gold Cup (Group 1) 500000 GBP Added, 2m 3f 210y',
    request_time: '2019-07-18 19:26:54.510638',
    running_delay_seconds: 1,
    start_time: '2019-07-18 19:25:00.114670',
    total_matched_amount: '2834725.00',
    betdaq_timestamp: null,
    market_update_request_id: 858844,
    against_side_price_1: '7.60',
    against_side_price_2: '7.80',
    against_side_price_3: '8.00',
    against_side_stake_1: '9.78',
    against_side_stake_2: '5.61',
    against_side_stake_3: '2.00',
    deduction_factor: '19.87',
    first_match_at_same_price_occurred_at: '2019-06-20 15:22:19',
    for_side_price_1: '6.60',
    for_side_price_2: '6.20',
    for_side_price_3: '6.00',
    for_side_stake_1: '20.07',
    for_side_stake_2: '10.02',
    for_side_stake_3: '9.82',
    last_matched_against_side_amount: '12.00',
    last_matched_for_side_amount: '2.00',
    last_matched_occurred_at: '2019-06-20 15:22:19',
    last_matched_price: '7.00',
    market_positive_winnings: '167859.07',
    market_winnings: '335759.01',
    matched_against_side_amount_at_same_price: '12.00',
    matched_for_side_amount_at_same_price: '2.00',
    matched_selection_against_stake: '189750.36',
    matched_selection_for_stake: '40950.33',
    number_orders: 2108,
    number_punters: 420,
    selection_id: 100822776,
    selection_name: ' 6 Cross Counter',
    selection_open_interest: '256996.04',
    selection_status: 'ACTIVE'
  },
  {
    request_id: 858844,
    currently_in_running: 1,
    event_name: '16:20 Royal Ascot',
    in_play: 0,
    in_running_allowed: 1,
    managed_when_in_running: 1,
    market_id: 15838206,
    market_status: 'ACTIVE',
    matched_market_against_stake: '2413179.04',
    matched_market_for_stake: '421546.90',
    race_grade: '2m 3f 210y~Gold Cup (Group 1) 500000 GBP Added, 2m 3f 210y',
    request_time: '2019-07-18 19:26:54.510655',
    running_delay_seconds: 1,
    start_time: '2019-07-18 19:25:00.114670',
    total_matched_amount: '2834725.00',
    betdaq_timestamp: null,
    market_update_request_id: 858844,
    against_side_price_1: '4.70',
    against_side_price_2: '4.90',
    against_side_price_3: '5.00',
    against_side_stake_1: '9.37',
    against_side_stake_2: '6.24',
    against_side_stake_3: '2.00',
    deduction_factor: '14.31',
    first_match_at_same_price_occurred_at: '2019-06-20 15:21:40',
    for_side_price_1: '4.20',
    for_side_price_2: '4.10',
    for_side_price_3: '4.00',
    for_side_stake_1: '43.29',
    for_side_stake_2: '21.36',
    for_side_stake_3: '138.75',
    last_matched_against_side_amount: '1.62',
    last_matched_for_side_amount: '0.49',
    last_matched_occurred_at: '2019-06-20 15:22:16',
    last_matched_price: '4.30',
    market_positive_winnings: '227516.36',
    market_winnings: '455081.58',
    matched_against_side_amount_at_same_price: '6.57',
    matched_for_side_amount_at_same_price: '1.99',
    matched_selection_against_stake: '234865.31',
    matched_selection_for_stake: '44797.95',
    number_orders: 2655,
    number_punters: 484,
    selection_id: 100822781,
    selection_name: ' 8 Dee Ex Bee',
    selection_open_interest: '347509.63',
    selection_status: 'ACTIVE'
  },
  {
    request_id: 858844,
    currently_in_running: 1,
    event_name: '16:20 Royal Ascot',
    in_play: 0,
    in_running_allowed: 1,
    managed_when_in_running: 1,
    market_id: 15838206,
    market_status: 'ACTIVE',
    matched_market_against_stake: '2413179.04',
    matched_market_for_stake: '421546.90',
    race_grade: '2m 3f 210y~Gold Cup (Group 1) 500000 GBP Added, 2m 3f 210y',
    request_time: '2019-07-18 19:26:54.510670',
    running_delay_seconds: 1,
    start_time: '2019-07-18 19:25:00.114670',
    total_matched_amount: '2834725.00',
    betdaq_timestamp: null,
    market_update_request_id: 858844,
    against_side_price_1: '22.00',
    against_side_price_2: '23.00',
    against_side_price_3: '24.00',
    against_side_stake_1: '2.24',
    against_side_stake_2: '7.00',
    against_side_stake_3: '2.00',
    deduction_factor: '6.71',
    first_match_at_same_price_occurred_at: '2019-06-20 15:21:26',
    for_side_price_1: '16.50',
    for_side_price_2: '14.50',
    for_side_price_3: '14.00',
    for_side_stake_1: '1.32',
    for_side_stake_2: '23.67',
    for_side_stake_3: '13.50',
    last_matched_against_side_amount: '29.96',
    last_matched_for_side_amount: '1.99',
    last_matched_occurred_at: '2019-06-20 15:21:26',
    last_matched_price: '16.00',
    market_positive_winnings: '233847.02',
    market_winnings: '467737.04',
    matched_against_side_amount_at_same_price: '44.96',
    matched_for_side_amount_at_same_price: '2.99',
    matched_selection_against_stake: '229744.77',
    matched_selection_for_stake: '15043.59',
    number_orders: 1811,
    number_punters: 243,
    selection_id: 100822786,
    selection_name: ' 9 Flag Of Honour',
    selection_open_interest: '356246.79',
    selection_status: 'ACTIVE'
  },
  {
    request_id: 858844,
    currently_in_running: 1,
    event_name: '16:20 Royal Ascot',
    in_play: 0,
    in_running_allowed: 1,
    managed_when_in_running: 1,
    market_id: 15838206,
    market_status: 'ACTIVE',
    matched_market_against_stake: '2413179.04',
    matched_market_for_stake: '421546.90',
    race_grade: '2m 3f 210y~Gold Cup (Group 1) 500000 GBP Added, 2m 3f 210y',
    request_time: '2019-07-18 19:26:54.510683',
    running_delay_seconds: 1,
    start_time: '2019-07-18 19:25:00.114670',
    total_matched_amount: '2834725.00',
    betdaq_timestamp: null,
    market_update_request_id: 858844,
    against_side_price_1: '86.00',
    against_side_price_2: '96.00',
    against_side_price_3: null,
    against_side_stake_1: '4.24',
    against_side_stake_2: '2.00',
    against_side_stake_3: null,
    deduction_factor: '5.26',
    first_match_at_same_price_occurred_at: '2019-06-20 15:20:52',
    for_side_price_1: '26.00',
    for_side_price_2: '25.00',
    for_side_price_3: '23.00',
    for_side_stake_1: '17.69',
    for_side_stake_2: '6.50',
    for_side_stake_3: '2.79',
    last_matched_against_side_amount: '123.50',
    last_matched_for_side_amount: '6.50',
    last_matched_occurred_at: '2019-06-20 15:21:03',
    last_matched_price: '20.00',
    market_positive_winnings: '259281.83',
    market_winnings: '518515.43',
    matched_against_side_amount_at_same_price: '304.00',
    matched_for_side_amount_at_same_price: '16.00',
    matched_selection_against_stake: '228128.77',
    matched_selection_for_stake: '10457.89',
    number_orders: 1625,
    number_punters: 211,
    selection_id: 100822798,
    selection_name: ' 1 Called To The Bar',
    selection_open_interest: '346490.87',
    selection_status: 'ACTIVE'
  },
  {
    request_id: 858844,
    currently_in_running: 1,
    event_name: '16:20 Royal Ascot',
    in_play: 0,
    in_running_allowed: 1,
    managed_when_in_running: 1,
    market_id: 15838206,
    market_status: 'ACTIVE',
    matched_market_against_stake: '2413179.04',
    matched_market_for_stake: '421546.90',
    race_grade: '2m 3f 210y~Gold Cup (Group 1) 500000 GBP Added, 2m 3f 210y',
    request_time: '2019-07-18 19:26:54.510697',
    running_delay_seconds: 1,
    start_time: '2019-07-18 19:25:00.114670',
    total_matched_amount: '2834725.00',
    betdaq_timestamp: null,
    market_update_request_id: 858844,
    against_side_price_1: '19.50',
    against_side_price_2: '21.00',
    against_side_price_3: '24.00',
    against_side_stake_1: '10.00',
    against_side_stake_2: '2.24',
    against_side_stake_3: '3.00',
    deduction_factor: '4.05',
    first_match_at_same_price_occurred_at: '2019-06-20 15:22:09',
    for_side_price_1: '14.50',
    for_side_price_2: '13.00',
    for_side_price_3: '12.00',
    for_side_stake_1: '1.66',
    for_side_stake_2: '25.09',
    for_side_stake_3: '16.00',
    last_matched_against_side_amount: '116.78',
    last_matched_for_side_amount: '6.32',
    last_matched_occurred_at: '2019-06-20 15:22:09',
    last_matched_price: '19.50',
    market_positive_winnings: '268163.41',
    market_winnings: '536345.79',
    matched_against_side_amount_at_same_price: '164.94',
    matched_for_side_amount_at_same_price: '8.92',
    matched_selection_against_stake: '216227.36',
    matched_selection_for_stake: '7666.67',
    number_orders: 1660,
    number_punters: 237,
    selection_id: 100822792,
    selection_name: ' 2 Capri',
    selection_open_interest: '380842.25',
    selection_status: 'ACTIVE'
  },
  {
    request_id: 858844,
    currently_in_running: 1,
    event_name: '16:20 Royal Ascot',
    in_play: 0,
    in_running_allowed: 1,
    managed_when_in_running: 1,
    market_id: 15838206,
    market_status: 'ACTIVE',
    matched_market_against_stake: '2413179.04',
    matched_market_for_stake: '421546.90',
    race_grade: '2m 3f 210y~Gold Cup (Group 1) 500000 GBP Added, 2m 3f 210y',
    request_time: '2019-07-18 19:26:54.510709',
    running_delay_seconds: 1,
    start_time: '2019-07-18 19:25:00.114670',
    total_matched_amount: '2834725.00',
    betdaq_timestamp: null,
    market_update_request_id: 858844,
    against_side_price_1: '100.00',
    against_side_price_2: null,
    against_side_price_3: null,
    against_side_stake_1: '2.00',
    against_side_stake_2: null,
    against_side_stake_3: null,
    deduction_factor: '4.42',
    first_match_at_same_price_occurred_at: '2019-06-20 15:21:25',
    for_side_price_1: '37.00',
    for_side_price_2: '36.00',
    for_side_price_3: '35.00',
    for_side_stake_1: '13.37',
    for_side_stake_2: '4.50',
    for_side_stake_3: '5.32',
    last_matched_against_side_amount: '63.66',
    last_matched_for_side_amount: '1.87',
    last_matched_occurred_at: '2019-06-20 15:21:53',
    last_matched_price: '35.00',
    market_positive_winnings: '201612.14',
    market_winnings: '403276.43',
    matched_against_side_amount_at_same_price: '1326.15',
    matched_for_side_amount_at_same_price: '39.00',
    matched_selection_against_stake: '181242.58',
    matched_selection_for_stake: '5011.03',
    number_orders: 1309,
    number_punters: 176,
    selection_id: 100822807,
    selection_name: ' 5 Thomas Hobson',
    selection_open_interest: '282104.77',
    selection_status: 'ACTIVE'
  },
  {
    request_id: 858844,
    currently_in_running: 1,
    event_name: '16:20 Royal Ascot',
    in_play: 0,
    in_running_allowed: 1,
    managed_when_in_running: 1,
    market_id: 15838206,
    market_status: 'ACTIVE',
    matched_market_against_stake: '2413179.04',
    matched_market_for_stake: '421546.90',
    race_grade: '2m 3f 210y~Gold Cup (Group 1) 500000 GBP Added, 2m 3f 210y',
    request_time: '2019-07-18 19:26:54.510722',
    running_delay_seconds: 1,
    start_time: '2019-07-18 19:25:00.114670',
    total_matched_amount: '2834725.00',
    betdaq_timestamp: null,
    market_update_request_id: 858844,
    against_side_price_1: '66.00',
    against_side_price_2: '76.00',
    against_side_price_3: '90.00',
    against_side_stake_1: '4.74',
    against_side_stake_2: '2.00',
    against_side_stake_3: '2.00',
    deduction_factor: '4.23',
    first_match_at_same_price_occurred_at: '2019-06-20 15:21:37',
    for_side_price_1: '29.00',
    for_side_price_2: '28.00',
    for_side_price_3: '26.00',
    for_side_stake_1: '10.84',
    for_side_stake_2: '17.38',
    for_side_stake_3: '7.00',
    last_matched_against_side_amount: '134.54',
    last_matched_for_side_amount: '4.34',
    last_matched_occurred_at: '2019-06-20 15:21:37',
    last_matched_price: '32.00',
    market_positive_winnings: '235963.07',
    market_winnings: '471972.65',
    matched_against_side_amount_at_same_price: '1023.12',
    matched_for_side_amount_at_same_price: '33.00',
    matched_selection_against_stake: '200059.54',
    matched_selection_for_stake: '5556.95',
    number_orders: 1389,
    number_punters: 188,
    selection_id: 100822803,
    selection_name: ' 3 Magic Circle',
    selection_open_interest: '331173.66',
    selection_status: 'ACTIVE'
  },
  {
    request_id: 858844,
    currently_in_running: 1,
    event_name: '16:20 Royal Ascot',
    in_play: 0,
    in_running_allowed: 1,
    managed_when_in_running: 1,
    market_id: 15838206,
    market_status: 'ACTIVE',
    matched_market_against_stake: '2413179.04',
    matched_market_for_stake: '421546.90',
    race_grade: '2m 3f 210y~Gold Cup (Group 1) 500000 GBP Added, 2m 3f 210y',
    request_time: '2019-07-18 19:26:54.510734',
    running_delay_seconds: 1,
    start_time: '2019-07-18 19:25:00.114670',
    total_matched_amount: '2834725.00',
    betdaq_timestamp: null,
    market_update_request_id: 858844,
    against_side_price_1: null,
    against_side_price_2: null,
    against_side_price_3: null,
    against_side_stake_1: null,
    against_side_stake_2: null,
    against_side_stake_3: null,
    deduction_factor: '2.07',
    first_match_at_same_price_occurred_at: '2019-06-20 15:20:12',
    for_side_price_1: '74.00',
    for_side_price_2: '64.00',
    for_side_price_3: '60.00',
    for_side_stake_1: '2.50',
    for_side_stake_2: '3.00',
    for_side_stake_3: '1.00',
    last_matched_against_side_amount: '364.37',
    last_matched_for_side_amount: '4.39',
    last_matched_occurred_at: '2019-06-20 15:20:12',
    last_matched_price: '84.00',
    market_positive_winnings: '207220.60',
    market_winnings: '414490.69',
    matched_against_side_amount_at_same_price: '364.37',
    matched_for_side_amount_at_same_price: '4.39',
    matched_selection_against_stake: '116201.61',
    matched_selection_for_stake: '1658.51',
    number_orders: 720,
    number_punters: 123,
    selection_id: 100822822,
    selection_name: '11 Raymond Tusk',
    selection_open_interest: '211042.47',
    selection_status: 'ACTIVE'
  },
  {
    request_id: 858844,
    currently_in_running: 1,
    event_name: '16:20 Royal Ascot',
    in_play: 0,
    in_running_allowed: 1,
    managed_when_in_running: 1,
    market_id: 15838206,
    market_status: 'ACTIVE',
    matched_market_against_stake: '2413179.04',
    matched_market_for_stake: '421546.90',
    race_grade: '2m 3f 210y~Gold Cup (Group 1) 500000 GBP Added, 2m 3f 210y',
    request_time: '2019-07-18 19:26:54.510748',
    running_delay_seconds: 1,
    start_time: '2019-07-18 19:25:00.114670',
    total_matched_amount: '2834725.00',
    betdaq_timestamp: null,
    market_update_request_id: 858844,
    against_side_price_1: null,
    against_side_price_2: null,
    against_side_price_3: null,
    against_side_stake_1: null,
    against_side_stake_2: null,
    against_side_stake_3: null,
    deduction_factor: '0.60',
    first_match_at_same_price_occurred_at: '2019-06-20 15:20:15',
    for_side_price_1: '102.00',
    for_side_price_2: '100.00',
    for_side_price_3: '94.00',
    for_side_stake_1: '4.23',
    for_side_stake_2: '4.00',
    for_side_stake_3: '2.00',
    last_matched_against_side_amount: '272.08',
    last_matched_for_side_amount: '1.52',
    last_matched_occurred_at: '2019-06-20 15:20:15',
    last_matched_price: '180.00',
    market_positive_winnings: '342577.65',
    market_winnings: '685032.47',
    matched_against_side_amount_at_same_price: '272.08',
    matched_for_side_amount_at_same_price: '1.52',
    matched_selection_against_stake: '294685.89',
    matched_selection_for_stake: '1602.79',
    number_orders: 1126,
    number_punters: 146,
    selection_id: 100822808,
    selection_name: ' 7 Cypress Creek',
    selection_open_interest: '517889.70',
    selection_status: 'ACTIVE'
  },
  {
    request_id: 858844,
    currently_in_running: 1,
    event_name: '16:20 Royal Ascot',
    in_play: 0,
    in_running_allowed: 1,
    managed_when_in_running: 1,
    market_id: 15838206,
    market_status: 'ACTIVE',
    matched_market_against_stake: '2413179.04',
    matched_market_for_stake: '421546.90',
    race_grade: '2m 3f 210y~Gold Cup (Group 1) 500000 GBP Added, 2m 3f 210y',
    request_time: '2019-07-18 19:26:54.510760',
    running_delay_seconds: 1,
    start_time: '2019-07-18 19:25:00.114670',
    total_matched_amount: '2834725.00',
    betdaq_timestamp: null,
    market_update_request_id: 858844,
    against_side_price_1: null,
    against_side_price_2: null,
    against_side_price_3: null,
    against_side_stake_1: null,
    against_side_stake_2: null,
    against_side_stake_3: null,
    deduction_factor: '0.77',
    first_match_at_same_price_occurred_at: '2019-06-20 15:20:15',
    for_side_price_1: '102.00',
    for_side_price_2: '100.00',
    for_side_price_3: '90.00',
    for_side_stake_1: '4.98',
    for_side_stake_2: '3.17',
    for_side_stake_3: '2.00',
    last_matched_against_side_amount: '44.44',
    last_matched_for_side_amount: '0.11',
    last_matched_occurred_at: '2019-06-20 15:20:15',
    last_matched_price: '405.00',
    market_positive_winnings: '252491.50',
    market_winnings: '505019.07',
    matched_against_side_amount_at_same_price: '44.44',
    matched_for_side_amount_at_same_price: '0.11',
    matched_selection_against_stake: '181822.97',
    matched_selection_for_stake: '925.34',
    number_orders: 763,
    number_punters: 120,
    selection_id: 100822815,
    selection_name: '10 Master Of Reality',
    selection_open_interest: '303425.03',
    selection_status: 'ACTIVE'
  }
];
