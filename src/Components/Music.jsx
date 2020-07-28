import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

//Pieces
import Prokofiev from '../assets/music/Prokofiev.mp3';
import Wieniawski2 from '../assets/music/Wieniawski Violin Concerto no. 2 mvt 3.mp3';
import Melodie from '../assets/music/Tchaikovsky Melodie.mp3';


class Music extends React.Component {
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

        <h3>Piazzolla Ave Maria (Tanti Anni Prima)</h3>
        <iframe src="https://player.vimeo.com/video/442256781" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <p><a href="https://vimeo.com/442256781">DSO Quartet - Piazzolla&rsquo;s &ldquo;Tanti Anni Prima&rdquo; (Ave Mar&iacute;a)</a> from <a href="https://vimeo.com/user81927946">Christine Hsia</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        
        <h2>Pieces I've Transcribed/Arranged</h2>
        <h3> Spirited Away: いつも何度でも ,Itsumo Nando Demo, Always With Me (Piano Trio)</h3>
        <iframe title="Spirited Away" width="560" height="315" src="https://www.youtube.com/embed/8rPdn63yvmM" frameborder="0" allowfullscreen></iframe>
        <h3> Tonari no Totoroトトロ (String Quartet)</h3>
        <iframe title="Totoro" width="560" height="315" src="https://www.youtube.com/embed/Ehsz9A35P34" frameborder="0" allowfullscreen></iframe>
      
        <h2>Fun Projects</h2>
        <h3>Microsoft the Musical</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZGeWNR8CWnA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  }
}

export default Music;
