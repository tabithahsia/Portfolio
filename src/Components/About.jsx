import React from 'react';
import Selfie from '../assets/images/Selfie.jpg';
import Selfie1 from '../assets/images/Selfie1.jpg';
import Selfie2 from '../assets/images/Selfie2.jpg';

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
        <img src={Selfie2} alt="Selfie2" />
        <p>
          Hello there! My name is Tabitha Hsia. I am a Full-Stack Web Developer based in the San Francisco Bay Area.
          <br></br>
          I enjoy interesting challenges. :)
          <br></br>
          I have also played violin for 20 years.
          <br></br>
          I live with my pet fish, Einstein Bettafin Hsia.
        </p>
        <h3> Skills </h3>
        <p><strong>Strong</strong>: Javascript ES6, HTML, React, Node, Express, MySQL, SQL, Redux </p>
        <p><strong>Knowledgeable</strong>: CSS, Backbone, jQuery, PostgreSQL, React-Router, Heroku, MongoDB, Mongoose, Bluebird, Knex, Git, C++, Angular, Socket.io, WebSockets, Jekyll, D3</p>

        <h3> Education </h3>
        <p><strong>University of the Pacific, </strong>  B.A. in Music Violin & Asian Languages and Studies: Chinese, Minor in Pre-Law
          <br></br>
          <span id="italicize">Relevant Courses: Intro to Computer Science (C++), Data Structures</span>
          </p>
        <p><strong>Hack Reactor</strong>  Advanced Software Engineering Immersive Program </p>
        <p><strong>Diablo Valley College</strong>
        <br></br>
        <span id="italicize">Relevant Courses: Calculus I, Calculus II, Linear Algebra</span>
        </p>

        <h3>Fun Facts</h3>
        <li>My dream job is to be the Mickey Mouse in Fantasmic</li>
        <li>Favorite aquatic animal is the whale shark</li>
        <li>I am a curry addict</li>
      </div>
    )
  }
}

export default About;
