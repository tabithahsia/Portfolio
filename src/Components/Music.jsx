import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

// Pieces
import Prokofiev from '../assets/music/Prokofiev.mp3';
import Wieniawski2 from '../assets/music/Wieniawski Violin Concerto no. 2 mvt 3.mp3';
import Melodie from '../assets/music/Tchaikovsky Melodie.mp3';

// Reusable component for audio player
const AudioPiece = ({ title, src }) => (
  <div>
    <h3>{title}</h3>
    <ReactAudioPlayer src={src} controls />
  </div>
);

// Reusable component for iframe embeds
const VideoEmbed = ({ title, src, width = '560', height = '315' }) => (
  <div>
    <h3>{title}</h3>
    <iframe
      title={title}
      width={width}
      height={height}
      src={src}
      frameBorder="0"
      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

const Music = () => {
  return (
    <div>
      <section>
        <h2>Pieces I've played</h2>
        <AudioPiece
            title="Prokofiev Violin Concerto 1, 2nd Movement"
            src={Prokofiev}
        />
        <AudioPiece
          title="Wieniawski Violin Concerto 2, 3rd Movement"
          src={Wieniawski2}
        />
        <AudioPiece title="Tchaikovsky Melodie (No. 3)" src={Melodie} />

        <h3>Piazzolla Ave Maria (Tanti Anni Prima)</h3>
        <iframe title="Piazzolla Ave Maria" src="https://player.vimeo.com/video/442256781" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <p><a href="https://vimeo.com/442256781">DSO Quartet - Piazzolla&rsquo;s &ldquo;Tanti Anni Prima&rdquo; (Ave Mar&iacute;a)</a> from <a href="https://vimeo.com/user81927946">Christine Hsia</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
      </section>

      <section>
        <h2>Pieces I've Transcribed/Arranged</h2>
        <VideoEmbed
          title="Spirited Away: いつも何度でも ,Itsumo Nando Demo, Always With Me (Piano Trio)"
          src="https://www.youtube.com/embed/8rPdn63yvmM"
        />
        <VideoEmbed
          title="Tonari no Totoroトトロ (String Quartet)"
          src="https://www.youtube.com/embed/Ehsz9A35P34"
        />
      </section>

      <section>
      <h2>Fun Projects</h2>
            <h3>Microsoft the Musical</h3>
            <iframe title="Microsoft the Musical" width="560" height="315" src="https://www.youtube.com/embed/ZGeWNR8CWnA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
    </div>
  )
}

export default Music;
