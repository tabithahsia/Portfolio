import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

//Pieces
import Prokofiev from '../assets/music/Prokofiev.mp3';
import Wieniawski2 from '../assets/music/Wieniawski Violin Concerto no. 2 mvt 3.mp3';
import Melodie from '../assets/music/Tchaikovsky Melodie.mp3';


class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2>Pieces I've played</h2>

        <h3>Prokofiev Violin Concerto 1, 2nd Movement</h3>
          <ReactAudioPlayer
            src={Prokofiev}
            controls
          />

        <h3>Wieniawski Violin Concerto 2, 3rd Movement</h3>
          <ReactAudioPlayer
            src={Wieniawski2}
            controls
          />

        <h3>Tchaikovsky Melodie (No. 3)</h3>
          <ReactAudioPlayer
            src={Melodie}
            controls
          />
      </div>
    )
  }
}

export default Music;
