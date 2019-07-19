import React, { Component } from 'react';

export default class Feed extends Component {

  componentDidMount() {
    const canvas = document.getElementById('video-canvas');
    const url = 'ws://'+document.location.hostname+':9999/';
    const player = new window.JSMpeg.Player(url, {canvas: canvas});

    const ws = new WebSocket('ws://10.1.58.165:48009');

    ws.addEventListener('message', ({data}) => {
      console.log(data);


    });
  }

  render() {
    const { top } = this.props;

    const videoStyle = top ? {
      height: '100%',
      width: '100%',
      position: 'relative'
    } : {
      height: '500px',
      width: '900px',
      position: 'relative'
    };

    return (
      <section style={{flex: 1, position: 'relative'}}>
        {!top && (
          <div className='selections__selection-button full-screen'>
            <button onClick={this.props.onToggleClick}>Full-screen</button>
          </div>
        )}
        <div style={{position: 'relative'}}>
          <canvas id="video-canvas" style={videoStyle}></canvas>
          <aside className='popup-bet'>


            <div className='selections__selection-body'>


            </div>
            {!top && (
              <div className='selections__selection-button'>
                <button>Place Bet</button>
              </div>
            )}
          </aside>
        </div>
      </section>
        );
  };


}





{/*<script>*/}
{/*  var canvas = document.getElementById('video-canvas');*/}
{/*  var url = 'ws://'+document.location.hostname+':9999/';*/}
{/*  var player = new JSMpeg.Player(url, {canvas: canvas});*/}
{/*</script>*/}
{/*</div>*/}
