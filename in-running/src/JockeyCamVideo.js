import React from 'react';
import YouTube from 'react-youtube';
 
export default class JockeyCamVideo extends React.Component {
  render() {
    const opts = {
      height: '1280',
      width: '1920',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      <YouTube
        videoId="eRUf7_jspTY"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    //event.target.pauseVideo();
    event.target.seekTo(50);
  }
}