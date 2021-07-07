// == Import npm
import React from 'react';
import { Player, ControlBar } from 'video-react';
// == Import
import './styles.scss';

// == Composant
const Video = () => (
  <div className="video">
    <Player
      muted="true"
      autoPlay="true"
      src="https://i.imgur.com/G5ic1RZ.mp4"
      loop="true"
    >
      <ControlBar disableCompletely className="controlBar" />
    </Player>

  </div>
);

// == Export
export default Video;
