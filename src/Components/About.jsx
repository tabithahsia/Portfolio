import CatWithCoffee from "../assets/images/CatWithCoffee.jpg";

const About = () => {
  return (
    <div>
      <h2>About Me</h2>
      <img src={CatWithCoffee} alt="Sleepy cat with a coffee mug" />
      <p>
        Hello there! My name is Tabitha Hsia. I am a Full-Stack Software
        Engineer currently on a career break.
      </p>
      <p>
        I enjoy challenging myself through learning new technologies and
        implementing them in exciting projects.
      </p>
      <p>
        I have also played violin for over 20 years and am an active musician.
      </p>
      <p>
        I was a Software Engineer @{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.microsoft.com/en-us/"
        >
          Microsoft
        </a>{" "}
        from Jan 25, 2019 - Dec 11, 2023.
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://docs.google.com/document/d/1h3Kdyj4e3zcYmBM7S04EFD9_Q00oaBA3XLgHxWgFKU0/preview"
      >
        Tech Resume
      </a>{" "}
      |{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://bit.ly/tabithahsiamusicresume"
      >
        Music Resume
      </a>
      <section>
        <h3> Skills </h3>
        <p>
          <strong>Strong</strong>: TypeScript, JavaScript ES6, ReactJS, Redux,
          C#, Webpack, Node.js, Express, SQL, PostgreSQL, SQLite, MySQL,
          MongoDB, Mongoose, Git, HTML5, CSS3, jQuery, Bluebird
        </p>
        <p>
          <strong>Knowledgeable</strong>: AngularJS, Python, Backbone.js, D3.js,
          C++, WebSockets, Socket.IO, Jekyll, Heroku, AWS, KSP, Ruby, KnockoutJS
        </p>
      </section>
      <section>
        <h3>Education</h3>
        <p>
          <strong>University of the Pacific, </strong> B.A. in Music Violin &
          Asian Languages and Studies: Chinese, Minor in Pre-Law
          <br />
          <em>
            Relevant Courses: Intro to Computer Science (C++), Data Structures
          </em>
        </p>
        <p>
          <strong>Hack Reactor</strong> Advanced Software Engineering Immersive
          Program{" "}
        </p>

        <p>
          <strong>Diablo Valley College</strong>
          <br />
          <em>Relevant Courses: Calculus I, Calculus II, Linear Algebra</em>
        </p>
      </section>
      <section>
        <h3>Fun Facts</h3>
        <ul>
          <li>I am a curry and fried chicken addict</li>
          <li>Favorite aquatic animal is the whale shark</li>
          <li>My dream job is to be the Mickey Mouse in Fantasmic</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
