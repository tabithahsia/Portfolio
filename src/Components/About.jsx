import React from 'react';
import Selfie6 from '../assets/images/Selfie6.jpg';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2>About Me</h2>
        <br></br>
        <img src={Selfie6} alt="Selfie6" id="selfie6"/>
        <br></br>
        <br></br>
        <p>
          Hello there! My name is Tabitha Hsia. I am a Full-Stack Software Engineer based in the Greater Seattle Area.
          <br></br>
          I enjoy challenging myself through learning new technologies and implementing them in exciting projects.
          <br></br>
          I have also played violin for over 20 years and am an active musician.
          <br></br>
          <br></br>
          I am currently a Software Engineer @ <a target="_blank" href="https://www.microsoft.com/en-us/Microsoft">Microsoft</a>
        </p>
        <a target="_blank" href ="http://bit.ly/tabithahsiaresume">Tech Resume</a> | <a target="_blank" href="http://bit.ly/tabithahsiamusicresume">Music Resume</a>
        <h3 id="about"> Skills </h3>
        <p><strong>Strong</strong>: TypeScript, JavaScript ES6, C#, ReactJS, Redux, Webpack, Node.js, Express, SQL, PostgreSQL, SQLite, MySQL, MongoDB, Mongoose, Git, HTML5, CSS3, jQuery, Bluebird</p>
        <p><strong>Knowledgeable</strong>: AngularJS, Python, Backbone.js, D3.js, C++, WebSockets, Socket.IO, Jekyll, Heroku, AWS, KSP, Ruby</p>

        <h3 id="about"> Education </h3>
        <p><strong>University of the Pacific, </strong>  B.A. in Music Violin & Asian Languages and Studies: Chinese, Minor in Pre-Law
          <br></br>
          <span id="italicize">Relevant Courses: Intro to Computer Science (C++), Data Structures</span>
        </p>
        <p><strong>Hack Reactor</strong>  Advanced Software Engineering Immersive Program </p>
        <p><strong>Diablo Valley College</strong>
          <br></br>
          <span id="italicize">Relevant Courses: Calculus I, Calculus II, Linear Algebra</span>
        </p>
        <h3 id="about">Fun Facts</h3>
        <li>I am a curry and fried chicken addict</li>
        <li>Favorite aquatic animal is the whale shark</li>
        <li>My dream job is to be the Mickey Mouse in Fantasmic</li>

      </div>
    )
  }
}

export default About;
