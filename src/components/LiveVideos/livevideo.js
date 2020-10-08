import React, {useEffect, useRef} from 'react';
import StreamPlayer from './streamplayer'
import {Helmet} from "react-helmet";

function LiveVideo() {

    return (
      <div>
        <div className="video-container">
          <StreamPlayer/>
        </div>
      </div>
    );
}

export default LiveVideo;