import { Component } from "react";
import About from "./Components/About.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import Contact from "./Components/Contact.jsx";
import Music from "./Components/Music.jsx";
import "./styles.css";
import Modal from "react-responsive-modal";
import Github from "./assets/icons/GitHub-Mark-64px.png";
import Linkedin from "./assets/icons/In-Black-66px-R.png";

const GITHUB_URL = "https://github.com/tabithahsia";
const LINKEDIN_URL = "https://linkedin.com/in/tabithahsia";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeModal: null,
    };
  }

  handleModal = (modalName) => {
    this.setState({ activeModal: modalName });
  };

  onCloseModal = () => {
    this.setState({ activeModal: null });
  };

  renderModalContent = () => {
    const { activeModal } = this.state;
    switch (activeModal) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Music":
        return <Music />;
      default:
        return null;
    }
  };

  render() {
    const { activeModal } = this.state;

    return (
      <div>
        <header>
          <h1>Tabitha Hsia, Full-Stack Software Engineer & Violinist </h1>
          <hr />
        </header>

        <main>
          <div className="container">
            {["About", "Portfolio", "Contact", "Music"].map((modal) => (
              <button
                key={modal}
                className="item"
                onClick={() => this.handleModal(modal)}
              >
                {modal}
              </button>
            ))}
          </div>

          <Modal open={!!activeModal} onClose={this.onCloseModal} center>
            {this.renderModalContent()}
          </Modal>
        </main>

        <footer>
          <div id="external-links">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="My Github" className="icon" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} alt="My Linkedin" className="icon" />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
