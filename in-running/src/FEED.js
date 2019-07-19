import React, { Component } from 'react';

export default class Feed extends Component {
  constructor() {
    super();

    this.state = {
      popup: false,
      start: false
    };
  }

  componentDidMount() {
    const canvas = document.getElementById('video-canvas');
    const url = 'ws://' + document.location.hostname + ':9999/';
    const player = new window.JSMpeg.Player(url, { canvas: canvas });

    const ws = new WebSocket('ws://10.1.58.165:48009');

    ws.addEventListener('message', ({ data }) => {
      if (Array.isArray(data)) {
        this.setState({ start: true });

        setTimeout(() => {
          this.setState({ popup: true });
        }, 8000);

        setTimeout(() => {
          this.setState({ popup: false });
        }, 25000);
      }
    });
  }

  render() {
    const { top } = this.props;

    const videoStyle = top
      ? {
          height: '100%',
          width: '100%',
          position: 'relative'
        }
      : {
          height: '500px',
          width: '900px',
          position: 'relative'
        };

    return (
      <section style={{ flex: 1, position: 'relative' }}>
        {!top && (
          <div className="selections__selection-button full-screen">
            <button onClick={this.props.onToggleClick}>Full-screen</button>
          </div>
        )}
        <div style={{ position: 'relative' }}>
          <canvas id="video-canvas" style={videoStyle} />
          {!this.state.start && (
            <div
              style={{
                position: 'absolute',
                width: '100%',
                zIndex: 100,
                top: '50%'
              }}>
              <h1 style={{ color: '#fff', width: '100%', textAlign: 'center' }}>
                Starting soon
              </h1>
            </div>
          )}
          <aside className={`popup-bet ${this.state.popup ? 'active' : ''} `}>
            <div className="selections__selection-body">
              <img src="00000071.png" />
              <div style={{ flex: 1, padding: '0 20px' }}>
                <p style={{ lineHeight: '40px' }}>STRADIVARIUS</p>
              </div>
              <div>9/4</div>
            </div>
            {!top && (
              <div className="selections__selection-button">
                <button>Place Bet</button>
              </div>
            )}
          </aside>
        </div>
      </section>
    );
  }
}

{
  /*<script>*/
}
{
  /*  var canvas = document.getElementById('video-canvas');*/
}
{
  /*  var url = 'ws://'+document.location.hostname+':9999/';*/
}
{
  /*  var player = new JSMpeg.Player(url, {canvas: canvas});*/
}
{
  /*</script>*/
}
{
  /*</div>*/
}
