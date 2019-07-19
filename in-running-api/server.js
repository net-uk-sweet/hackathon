

const Stream = require('node-rtsp-stream');
const stream = new Stream({
  name: 'pony',
  streamUrl: 'rtsp://10.1.58.165:48020/stream.sdp',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
})

