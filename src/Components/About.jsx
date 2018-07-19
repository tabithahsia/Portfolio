import React from 'react';
import Selfie4 from '../assets/images/Selfie4.jpg';

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
        <img src={Selfie4} alt="Selfie4" />
        <p>
          Hello there! My name is Tabitha Hsia. I am a Full-Stack Software Engineer based in the San Francisco Bay Area.
          <br></br>
          I enjoy challenging myself through learning new technologies and implementing them in exciting projects.
          <br></br>
          I have also played violin for over 20 years and am an active musician.
        </p>
        <a href ="http://bit.ly/tabithahsiaresume">Resume</a>
        <h3 id="about"> Skills </h3>
        <p><strong>Strong</strong>: JavaScript ES6, HTML, React, Redux, Node, Express, MySQL, MongoDB </p>
        <p><strong>Knowledgeable</strong>: CSS, Backbone, jQuery, PostgreSQL, React-Router, Heroku, Mongoose, Bluebird, Knex, Git, C++, Angular, WebSockets, Jekyll, D3</p>

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
        <li>I am a curry addict</li>
        <li>Favorite aquatic animal is the whale shark</li>
        <li>My dream job is to be the Mickey Mouse in Fantasmic</li>

      </div>
    )
  }
}

export default About;
