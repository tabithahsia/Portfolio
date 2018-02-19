import React, { Component } from 'react';
import About from './Components/About.jsx';
import Portfolio from './Components/Portfolio.jsx';
import Contact from './Components/Contact.jsx';
import './styles.css'
import Modal from 'react-responsive-modal';
import Github from './GitHub-Mark-64px.png';
import Linkedin from './In-Black-66px-R.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: false,
      showPortfolio: false,
      showContact: false,
      open: false
    }
    this.handleAbout = this.handleAbout.bind(this);
    this.handlePortfolio = this.handlePortfolio.bind(this);
    this.handleContact = this.handleContact.bind(this);
  }

  handleAbout () {
    this.setState({
      showAbout: true,
      showPortfolio: false,
      showContact: false,
      open: true
    })
  }
  handlePortfolio () {
    this.setState({
      showPortfolio: true,
      showAbout: false,
      showContact: false,
      open: true
    })
  }

  handleContact () {
    this.setState({
      showContact: true,
      showAbout: false,
      showPortfolio: false,
      open: true
    })
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <h1>Tabitha Hsia, Full-Stack Software Engineer & Violinist </h1>
        <hr></hr>
        <br></br>
        <div className="container">
          <button className="item" onClick={ () => this.handleAbout() }>About</button>
          <button className="item" onClick={ () => this.handlePortfolio() }>Portfolio</button>
          <button className="item" onClick={ () => this.handleContact() }>Contact</button>

          { this.state.showAbout ?
            <Modal open={open} onClose={this.onCloseModal} > <About /> </Modal>
            :
            null
          }
          { this.state.showPortfolio ?
             <Modal open={open} onClose={this.onCloseModal} > <Portfolio /> </Modal>
             :
             null
          }
          { this.state.showContact ?
            <Modal open={open} onClose={this.onCloseModal} little> <Contact /> </Modal>
            :
            null
          }

        </div>

        <div id="image">
          <a href="https://github.com/tabithahsia" target="_blank" rel="noopener noreferrer"><img src={Github} alt="My Github" className="icon"/></a>
          <a href="https://linkedin.com/in/tabithahsia" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="My Linkedin" className="icon"/></a>
        </div>
      </div>
    );
  }
}

export default App;
