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
    return (
      <section style={{flex: 1}}>
        <div style={{position: 'relative'}}>
          <canvas id="video-canvas" style={{height: '500px', width: "900px", position: 'relative'}}></canvas>
          <aside className='popup-bet'>


            <div className='selections__selection-body'>

              




            </div>
            <div className='selections__selection-button'>
              <button>Place Bet</button>
            </div>
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
