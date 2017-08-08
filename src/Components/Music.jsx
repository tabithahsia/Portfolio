import React from 'react';
import Prokofiev from '../assets/music/Prokofiev.mp3';
import ReactAudioPlayer from 'react-audio-player';


class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2>Violin Music</h2>

      <h3>Prokofiev Violin Concerto 1, 2nd Movement</h3>
          <ReactAudioPlayer
            src={Prokofiev}
            controls
          />
      </div>
    )
  }
}

export default Music;
