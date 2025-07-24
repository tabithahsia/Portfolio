//Photos from Buzz
import BuzzHome from "../assets/images/Buzz Home.png";
import BuzzHomeLarge from "../assets/images/Buzz Home Large.png";
import BuzzCategories from "../assets/images/Buzz Categories.png";
import BuzzCategoriesLarge from "../assets/images/Buzz Categories Large.png";
import BuzzHHList from "../assets/images/Buzz HH List.png";
import BuzzHHListLarge from "../assets/images/Buzz HH List Large.png";

//Photos from JCF Page
import JCFHome from "../assets/images/JCF Home.png";
import JCFHomeLarge from "../assets/images/JCF Home Large.png";

//Photos from iResist
import iResistProtests from "../assets/images/iResist Protests.png";
import iResistProtestsLarge from "../assets/images/iResist Protests Large.png";
import iResistProtestInfo from "../assets/images/iResist Protest Info.png";
import iResistProtestInfoLarge from "../assets/images/iResist Protest Info Large.png";
import iResistMap from "../assets/images/iResist Map.png";
import iResistMapLarge from "../assets/images/iResist Map Large.png";
import iResistMessages from "../assets/images/iResist Messages.png";
import iResistMessagesLarge from "../assets/images/iResist Messages Large.png";
import iResistTweets from "../assets/images/iResist Tweets.png";
import iResistTweetsLarge from "../assets/images/iResist Tweets Large.png";

//Photos from Cat Facts
import CatFacts from "../assets/images/Cat Facts.png";
import CatFactsLarge from "../assets/images/Cat Facts Large.png";

//Photo from Yahoogle Mail
import Yahoogle from "../assets/images/Yahoogle.png";
import YahoogleLarge from "../assets/images/Yahoogle-Large.png";

const Project = ({
  title,
  description,
  technologies,
  demoLink,
  repoLink,
  images,
}) => (
  <div className="project">
    <h3>{title}</h3>
    <p>{description}</p>
    <p className="italicize">
      {title} is built with {technologies}
    </p>
    <span>
      Check it out at{" "}
      <a href={demoLink} target="_blank" rel="noopener noreferrer">
        {demoLink}
      </a>{" "}
      and see the code on{" "}
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        Github
      </a>
    </span>
    <div className="project-images">
      {images.map(({ small, large, alt }) => (
        <a key={alt} href={large} target="_blank" rel="noopener noreferrer">
          <img src={small} alt={alt} />
        </a>
      ))}
    </div>
  </div>
);

const Portfolio = () => {
  const projects = [
    {
      title: "iResist",
      description: `iResist allows users to anonymously organize, execute, or join protests.
        On the day of the protest, participants can view a live message feed, drop pins on a map, and follow a Twitter feed.`,
      technologies:
        "React, Redux, Socket.io, Leaflet, Twit, NodeJS, ExpressJS, PostgreSQL, Heroku",
      demoLink: "https://i-resist.herokuapp.com",
      repoLink: "https://github.com/iResist/iResist",
      images: [
        {
          small: iResistProtests,
          large: iResistProtestsLarge,
          alt: "iResist Protests",
        },
        {
          small: iResistProtestInfo,
          large: iResistProtestInfoLarge,
          alt: "iResist Protest Info",
        },
        { small: iResistMap, large: iResistMapLarge, alt: "iResist Map" },
        {
          small: iResistMessages,
          large: iResistMessagesLarge,
          alt: "iResist Messages",
        },
        {
          small: iResistTweets,
          large: iResistTweetsLarge,
          alt: "iResist Tweets",
        },
      ],
    },
    {
      title: "Buzz: SF Happy Hour Finder",
      description: `Buzz allows users to find happy hours in SF neighborhoods. 
        Users can select a neighborhood or choose a category (Divey, Bougie, Hip, etc.) to see recommendations.`,
      technologies: "React, NodeJS, ExpressJS, PostgreSQL, Heroku",
      demoLink: "https://buzzhappyhour.herokuapp.com/",
      repoLink: "https://github.com/BuzzHappyHour/Buzz",
      images: [
        { small: BuzzHome, large: BuzzHomeLarge, alt: "Buzz Homepage" },
        {
          small: BuzzCategories,
          large: BuzzCategoriesLarge,
          alt: "Buzz Categories",
        },
        { small: BuzzHHList, large: BuzzHHListLarge, alt: "Buzz HH List" },
      ],
    },
    {
      title: "Journey Christian Fellowship Homepage",
      description: `This is the website for Journey Christian Fellowship, a church in Walnut Creek.`,
      technologies: "Jekyll and Heroku",
      demoLink: "http://journeychristianfellowship.herokuapp.com/",
      repoLink: "https://github.com/tabithahsia/churchwebsite",
      images: [{ small: JCFHome, large: JCFHomeLarge, alt: "JCF Homepage" }],
    },
    {
      title: "Cat Facts",
      description: `Cat Facts generates cat facts and allows you to share these amazing facts with your fellow human beings.`,
      technologies: "React, NodeJS, ExpressJS, PostgreSQL, Heroku",
      demoLink: "http://catfacts.life",
      repoLink: "https://github.com/tabithahsia/Cat-Facts",
      images: [{ small: CatFacts, large: CatFactsLarge, alt: "Cat Facts" }],
    },
    {
      title: "YahoogleMail",
      description: `YahoogleMail is an email service.`,
      technologies: "React, NodeJS, ExpressJS, Heroku, SendGrid, Mailgun",
      demoLink: "http://yahooglemail.herokuapp.com",
      repoLink: "https://github.com/tabithahsia/email-service",
      images: [{ small: Yahoogle, large: YahoogleLarge, alt: "YahoogleMail" }],
    },
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </div>
  );
};

export default Portfolio;
