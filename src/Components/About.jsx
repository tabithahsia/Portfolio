import CatWithCoffee from "../assets/images/CatWithCoffee.jpg";

const About = () => {
  return (
    <div>
      <h2>About Me</h2>
      <img src={CatWithCoffee} alt="Sleepy cat with a coffee mug" />
      <p>
        Hello there! My name is Tabitha Hsia. I am a Full-Stack Software
        Engineer.
      </p>
      <p>
        I enjoy challenging myself through learning new technologies and
        implementing them in exciting projects.
      </p>
      <p>
        I have also played violin for over 25 years and am an active musician.
      </p>
      <p>
        Software Engineer @{" "}
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
        href="https://docs.google.com/document/d/1S39dU4-UjoiBQCZwY9TaYw4p4PGHxKQw0gyJHhryMa0/preview?tab=t.0"
      >
        Tech Resume
      </a>{" "}
      |{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://docs.google.com/document/d/1TqdriyPMGva18hs3mzGAo6RuQonHcx-S-82UIR957m4/preview?tab=t.0"
      >
        Music Resume
      </a>
      <section>
        <h3> Skills </h3>
        <p>
          <strong>Strong</strong>: TypeScript, JavaScript, C#, ReactJS, Redux,
          Flux, React Testing Library, Git, HTML5, CSS3, jQuery, Figma
        </p>
        <p>
          <strong>Knowledgeable</strong>: Cypress, KnockoutJS, KQL, AngularJS,
          Python, Backbone.js, D3.js, C++, WebSockets, Socket.IO, Jekyll,
          Heroku, AWS, Azure, KSP, Ruby, Webpack, Node.js, Express, SQL, SQL
          Server, PostgreSQL, SQLite, MySQL, MongoDB, Mongoose, Bluebird,
          FetchXML, Render, Prisma, Vite
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
