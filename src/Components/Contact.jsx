import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h2>Contact Me</h2>
        <p> Contact me at <a href="mailto:tabithahsia@gmail.com">tabithahsia@gmail.com</a> </p>
        <p> or fill out the form below </p>
        <form action="https://formspree.io/tabithahsia@gmail.com" method="POST" class="submissionfield">
          <input type="text" name="Name" placeholder="Your Name* " required/>

          <br></br>
          <br></br>

          <input type="text" name="Email" placeholder="Your Email* " required />

          <br></br>
          <br></br>

          <input type="text" name="Phone Number" placeholder="Your Phone (optional)" />

          <br></br>
          <br></br>

          <textarea name="Message" placeholder="Your Message*" required/>

          <br></br>
          <br></br>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Contact
