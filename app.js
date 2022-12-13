const express = require('express');
const app = express();

const { proxy, scriptUrl } = require('rtsp-relay')(app);

const handler = proxy({
  // url: `rtsp://admin:admin@10.0.1.2:554/feed`,
   url: 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4', 
  // url: 'rtsp://atualli:Open1w3r@painel.atualli.com:554/sdp:channel=4&stream=0.sdp',
    //  url: 'rtsp://painel.atualli.com:554/user=atualli&password=Ope1w3r&channel=4&stream=0.sdp',
    // url: 'rtsp://atualli:Atualli22@67.159.226.218:554/Streaming/channels/102/?transportmode=unicast',
    // url: 'rtsp://184.72.239.149/vod/mp4:BigBuckBunny_115k.mov',
    // url:'rtsp://rtsp/stream/pattern',
    //  additionalFlags: ['-q', '1'],
    // transport: 'tcp',

  // if your RTSP stream need credentials, include them in the URL as above
  verbose: false,
});
const handler2 = proxy({
  url: 'rtsp://atualli:Atualli22@67.159.226.218:554/Streaming/channels/202/?transportmode=unicast',additionalFlags: ['-q', '1'],
verbose: false,
});
const handler3 = proxy({
    url: 'rtsp://atualli:Atualli22@67.159.226.218:554/Streaming/channels/302/?transportmode=unicast',additionalFlags: ['-q', '1'],
  verbose: false,
});
const handler4 = proxy({
  url: 'rtsp://atualli:Atualli22@67.159.226.218:554/Streaming/channels/402/?transportmode=unicast',additionalFlags: ['-q', '1'],
verbose: false,
});
const handler5 = proxy({
  url: 'rtsp://atualli:Atualli22@67.159.226.218:554/Streaming/channels/502/?transportmode=unicast',additionalFlags: ['-q', '1'],
verbose: false,
});
const handler6 = proxy({
  url: 'rtsp://atualli:Atualli22@67.159.226.218:554/Streaming/channels/602/?transportmode=unicast',additionalFlags: ['-q', '1'],
verbose: false,
});
const handler7 = proxy({
  url: 'rtsp://atualli:Atualli22@67.159.226.218:554/Streaming/channels/702/?transportmode=unicast',additionalFlags: ['-q', '1'],
verbose: false,
});
// const handler8 = proxy({
//   url: 'rtsp://atualli:Atualli22@67.159.226.218:554/Streaming/channels/802/?transportmode=unicast',
// verbose: false,
// });
const handler9 = proxy({
  url: 'rtsp://atualli:Atualli22@67.159.226.218:554/Streaming/channels/902/?transportmode=unicast',additionalFlags: ['-q', '1'],
verbose: false,
});
// 

const handler11 = proxy({
  url: 'rtsp://atualli:Atualli22@67.159.226.218:554/Streaming/channels/1102/?transportmode=unicast',additionalFlags: ['-q', '1'],
  additionalFlags: ['-q', '1'] ,
verbose: false,
});
const handler12 = proxy({
  url: 'rtsp://atualli:Atualli22@67.159.226.218:554/Streaming/channels/1202/?transportmode=unicast',additionalFlags: ['-q', '1'],
verbose: false,
});
const handler13 = proxy({
  url: 'rtsp://atualli:Atualli22@67.159.226.218:554/Streaming/channels/1302/?transportmode=unicast',additionalFlags: ['-q', '1'],
verbose: false,
});
// const handler14 = proxy({
//   url: 'rtsp://atualli:Atualli22@67.159.226.218:554/Streaming/channels/1402/?transportmode=unicast',
// verbose: false,
// });
const handler15 = proxy({
  url: 'rtsp://atualli:Atualli22@67.159.226.218:554/Streaming/channels/1502/?transportmode=unicast',additionalFlags: ['-q', '1'],
verbose: false,
});
const handler16 = proxy({
  url: 'rtsp://atualli:Atualli22@67.159.226.218:554/Streaming/channels/1602/?transportmode=unicast',additionalFlags: ['-q', '1'],
verbose: false,
});

// the endpoint our RTSP uses
app.ws('/api/stream', handler);
app.ws('/api/stream2', handler2);
app.ws('/api/stream3', handler3);
app.ws('/api/stream4', handler4);
app.ws('/api/stream5', handler5);
app.ws('/api/stream6', handler6);
app.ws('/api/stream7', handler7);
// app.ws('/api/stream8', handler8);
app.ws('/api/stream9',  handler9);
// app.ws('/api/stream10', handler10);
app.ws('/api/stream11', handler11);
app.ws('/api/stream12', handler12);
app.ws('/api/stream13', handler13);
// app.ws('/api/stream14', handler14);
app.ws('/api/stream15', handler15);
app.ws('/api/stream16', handler16);

// this is an example html page to view the stream
app.get('/', (req, res) =>
  res.send(`
  <h1>Player RTSP-</h1>
 
  <canvas id='canvas'></canvas>
  <canvas id='canvas2'></canvas>
  <canvas id='canvas3'></canvas>
  <canvas id='canvas4'></canvas>
  <canvas id='canvas5'></canvas>
  <canvas id='canvas6'></canvas>
  <canvas id='canvas7'></canvas>

  <canvas id='canvas9'></canvas>
 
  <canvas id='canvas11'></canvas>
  <canvas id='canvas12'></canvas>
  <canvas id='canvas13'></canvas>
 
  <canvas id='canvas15'></canvas>
  <canvas id='canvas16'></canvas>

  <style>
    canvas {
      width: 400px;
      heigh: 300px;
    }
  </style>

  <script src='${scriptUrl}'></script>
  <script>
    loadPlayer({
      url: 'ws://' + location.host + '/api/stream',
      canvas: document.getElementById('canvas'),
    });
    loadPlayer({
      url: 'ws://' + location.host + '/api/stream2',
      canvas: document.getElementById('canvas2'),
    });
    loadPlayer({
      url: 'ws://' + location.host + '/api/stream3',
      canvas: document.getElementById('canvas3'),
    });
    loadPlayer({
      url: 'ws://' + location.host + '/api/stream4',
      canvas: document.getElementById('canvas4'),
    });
    loadPlayer({
      url: 'ws://' + location.host + '/api/stream5',
      canvas: document.getElementById('canvas5'),
    });
    loadPlayer({
      url: 'ws://' + location.host + '/api/stream6',
      canvas: document.getElementById('canvas6'),
    });
    loadPlayer({
      url: 'ws://' + location.host + '/api/stream7',
      canvas: document.getElementById('canvas7'),
    });

    loadPlayer({
      url: 'ws://' + location.host + '/api/stream9',
      canvas: document.getElementById('canvas9'),
    });




      loadPlayer({
        url: 'ws://' + location.host + '/api/stream11',
        canvas: document.getElementById('canvas11'),
      });
      loadPlayer({
        url: 'ws://' + location.host + '/api/stream12',
        canvas: document.getElementById('canvas12'),
      });
      loadPlayer({
        url: 'ws://' + location.host + '/api/stream13',
        canvas: document.getElementById('canvas13'),
      });




      loadPlayer({
        url: 'ws://' + location.host + '/api/stream15',
        canvas: document.getElementById('canvas15'),
      });
      loadPlayer({
        url: 'ws://' + location.host + '/api/stream16',
        canvas: document.getElementById('canvas16'),
      });


  </script>
  
`),
);

// ws://atualli.ddns.net:8112/stream?c=00
// app.get('/', (req, res) =>
//   res.send(`
//   <h1>Player rtsp2</h1>
 
//   <canvas id='canvas2'></canvas>

//   <script src='${scriptUrl}'></script>
//   <script>
//     loadPlayer({
//       url: 'ws://' + location.host + '/api/stream',
//       canvas: document.getElementById('canvas2')
//     });
//   </script>
  
// `),
// );


app.listen(2000);