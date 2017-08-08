import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  }

  render() {
    return (
      <div>
        <h2>Contact Me</h2>
        <p> Contact me at <a href="mailto:tabithahsia@gmail.com">tabithahsia@gmail.com</a> </p>
        <p> or fill out the form below </p>
        <form action="https://formspree.io/tabithahsia@gmail.com" method="POST" class="submissionfield">
          <input type="text" name="Name" placeholder="Your Name* " value={this.state.name} onChange={(e) => this.setState({ name: e.target.value})} required/>

          <br></br>
          <br></br>

          <input type="text" name="Email" placeholder="Your Email* " value={this.state.email} onChange={(e) => this.setState({ email: e.target.value})} required />

          <br></br>
          <br></br>

          <input type="text" name="Phone Number" placeholder="Your Phone (optional)" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value})} />

          <br></br>
          <br></br>

          <textarea name="Message" placeholder="Your Message*" value={this.state.message} onChange={(e) => this.setState({ message: e.target.value})} required/>

          <br></br>
          <br></br>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Contact
